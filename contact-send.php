<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

mb_language('Japanese');
mb_internal_encoding('UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

$configPath = dirname(__DIR__) . '/contact_config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    exit('Mail config is missing.');
}

$autoloadPath = dirname(__DIR__) . '/vendor/autoload.php';
if (!is_file($autoloadPath)) {
    http_response_code(500);
    exit('PHPMailer is not installed.');
}

require $autoloadPath;
$config = require $configPath;

$typeLabels = [
    'service' => 'サービスについて',
    'business' => '法人提携について',
    'recruit' => '採用応募について',
    'other' => 'その他',
];
$allowedTopics = ['遺品整理', '生前整理', '福祉整理', 'お片付け', '買取', 'その他'];

if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 16384 || !isSameOriginRequest($config['site_origins'] ?? [])) {
    redirect($config['redirect_error'] ?? 'contact.html?error=1');
}

try {
    $fields = [
        'type' => input('type', 32),
        'topics' => inputArray('topic', $allowedTopics),
        'name' => input('name', 100),
        'company' => input('company', 120),
        'tel' => input('tel', 40),
        'email' => input('email', 254),
        'address' => input('address', 200),
        'message' => input('message', 5000),
    ];
    $privacy = input('privacy', 1);
    $website = input('website', 200);
} catch (InvalidArgumentException $e) {
    redirect('contact.html?error=input');
}

if ($website !== '') {
    redirect($config['redirect_success'] ?? 'contact.html?sent=1');
}

if (
    !isset($typeLabels[$fields['type']]) ||
    $fields['name'] === '' ||
    preg_match('/[\r\n]/', $fields['name']) ||
    $fields['email'] === '' ||
    preg_match('/[\r\n]/', $fields['email']) ||
    !filter_var($fields['email'], FILTER_VALIDATE_EMAIL) ||
    $privacy !== '1'
) {
    redirect('contact.html?error=input');
}

try {
    if (!allowSubmission(dirname(__DIR__) . '/contact-rate-limit.json', (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'))) {
        redirect('contact.html?error=rate');
    }
} catch (RuntimeException $e) {
    error_log('Contact rate limit unavailable.');
    redirect($config['redirect_error'] ?? 'contact.html?error=1');
}

$subject = '[' . ($config['site_name'] ?? 'Webサイト') . '] お問い合わせを受信しました';
$body = buildAdminBody($fields, $typeLabels);

try {
    $adminMail = createMailer($config);
    $adminMail->addAddress((string)$config['admin_email'], (string)($config['admin_name'] ?? ''));
    $adminMail->addReplyTo($fields['email'], $fields['name']);
    $adminMail->Subject = $subject;
    $adminMail->Body = $body;
    $adminMail->send();

} catch (Exception $e) {
    error_log('Contact mail failed: ' . $e->getMessage());
    redirect($config['redirect_error'] ?? 'contact.html?error=1');
}

// An automatic reply can be abused to send mail to arbitrary addresses, so it is opt-in.
if (($config['send_auto_reply'] ?? false) === true) {
    try {
        $replyMail = createMailer($config);
        $replyMail->addAddress($fields['email'], $fields['name']);
        $replyMail->Subject = '[' . ($config['site_name'] ?? 'Website') . '] お問い合わせありがとうございます';
        $replyMail->Body = buildAutoReplyBody($fields, (string)($config['site_name'] ?? 'Website'));
        $replyMail->send();
    } catch (Exception $e) {
        // The administrator already received the inquiry; do not invite a duplicate submission.
        error_log('Contact auto reply failed: ' . $e->getMessage());
    }
}

redirect($config['redirect_success'] ?? 'contact.html?sent=1');

function input(string $key, int $maxLength): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value) || !mb_check_encoding($value, 'UTF-8')) {
        throw new InvalidArgumentException('Invalid input type or encoding.');
    }
    $value = trim($value);
    if (mb_strlen($value, 'UTF-8') > $maxLength || preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', $value)) {
        throw new InvalidArgumentException('Invalid input length or control character.');
    }
    return $value;
}

function inputArray(string $key, array $allowed): array
{
    $value = $_POST[$key] ?? [];
    if (!is_array($value)) {
        throw new InvalidArgumentException('Invalid list.');
    }
    if (count($value) > count($allowed)) {
        throw new InvalidArgumentException('Too many selections.');
    }
    foreach ($value as $item) {
        if (!is_string($item) || !in_array($item, $allowed, true)) {
            throw new InvalidArgumentException('Invalid selection.');
        }
    }
    return array_values(array_unique($value));
}

function isSameOriginRequest(array $siteOrigins): bool
{
    if ($siteOrigins === []) {
        return false;
    }
    if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
        return false;
    }
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '') {
        return in_array(rtrim($origin, '/'), $siteOrigins, true);
    }
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if ($referer !== '') {
        $parts = parse_url($referer);
        if (!is_array($parts) || !isset($parts['scheme'], $parts['host'])) {
            return false;
        }
        $refererOrigin = $parts['scheme'] . '://' . $parts['host'] . (isset($parts['port']) ? ':' . $parts['port'] : '');
        return in_array($refererOrigin, $siteOrigins, true);
    }
    return ($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'same-origin';
}

function allowSubmission(string $path, string $clientIp): bool
{
    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        throw new RuntimeException('Cannot open rate limit state.');
    }
    try {
        @chmod($path, 0600);
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Cannot lock rate limit state.');
        }
        $contents = stream_get_contents($handle);
        if ($contents === false) {
            throw new RuntimeException('Cannot read rate limit state.');
        }
        $state = $contents === '' ? ['global' => [], 'clients' => []] : json_decode($contents, true);
        if (!is_array($state) || !isset($state['global'], $state['clients']) || !is_array($state['global']) || !is_array($state['clients'])) {
            throw new RuntimeException('Invalid rate limit state.');
        }

        $now = time();
        $state['global'] = array_values(array_filter($state['global'], static fn($time) => is_int($time) && $time > $now - 3600));
        foreach ($state['clients'] as $key => $times) {
            if (!is_array($times)) {
                throw new RuntimeException('Invalid client rate limit state.');
            }
            $times = array_values(array_filter($times, static fn($time) => is_int($time) && $time > $now - 900));
            if ($times === []) {
                unset($state['clients'][$key]);
            } else {
                $state['clients'][$key] = $times;
            }
        }

        $key = hash('sha256', $clientIp);
        if (count($state['global']) >= 100 || count($state['clients'][$key] ?? []) >= 5) {
            return false;
        }
        $state['global'][] = $now;
        $state['clients'][$key][] = $now;
        $encoded = json_encode($state, JSON_THROW_ON_ERROR);
        if (!rewind($handle) || !ftruncate($handle, 0) || fwrite($handle, $encoded) !== strlen($encoded) || !fflush($handle)) {
            throw new RuntimeException('Cannot write rate limit state.');
        }
        return true;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

function createMailer(array $config): PHPMailer
{
    if (($config['smtp']['host'] ?? '') === 'sv00000.xserver.jp' || ($config['smtp']['password'] ?? '') === 'CHANGE_ME') {
        throw new Exception('SMTP is not configured.');
    }
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = (string)$config['smtp']['host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string)$config['smtp']['username'];
    $mail->Password = (string)$config['smtp']['password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = (int)$config['smtp']['port'];
    $mail->setFrom((string)$config['from_email'], (string)$config['from_name']);
    $mail->isHTML(false);
    return $mail;
}

function buildAdminBody(array $fields, array $typeLabels): string
{
    $type = $typeLabels[$fields['type']] ?? $fields['type'];
    $topics = $fields['topics'] ? implode('、', $fields['topics']) : 'なし';

    return <<<BODY
Webサイトからお問い合わせがありました。

お問い合わせ種別: {$type}
ご相談内容: {$topics}
お名前: {$fields['name']}
貴社名: {$fields['company']}
電話番号: {$fields['tel']}
メールアドレス: {$fields['email']}
ご住所: {$fields['address']}

お問い合わせ内容:
{$fields['message']}
BODY;
}

function buildAutoReplyBody(array $fields, string $siteName): string
{
    return <<<BODY
{$fields['name']} 様

お問い合わせありがとうございます。以下の内容を受け付けました。
内容を確認のうえ、ご連絡いたします。

お問い合わせ内容:
{$fields['message']}

{$siteName}
BODY;
}

function redirect(string $to): void
{
    header('Location: ' . $to, true, 303);
    exit;
}
