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

$configPath = __DIR__ . '/contact_config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    exit('Mail config is missing.');
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (!is_file($autoloadPath)) {
    http_response_code(500);
    exit('PHPMailer is not installed.');
}

require $autoloadPath;
$config = require $configPath;

$fields = [
    'type' => input('type'),
    'topics' => inputArray('topic'),
    'name' => input('name'),
    'company' => input('company'),
    'tel' => input('tel'),
    'email' => input('email'),
    'address' => input('address'),
    'message' => input('message'),
];

if ($fields['name'] === '' || $fields['email'] === '' || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    redirect($config['redirect_error'] ?? 'contact.html?error=1');
}

$typeLabels = [
    'service' => 'Service',
    'business' => 'Business partnership',
    'recruit' => 'Recruit',
    'other' => 'Other',
];

$subject = '[' . ($config['site_name'] ?? 'Website') . '] Contact form submitted';
$body = buildAdminBody($fields, $typeLabels);
$autoReplySubject = 'Thank you for your inquiry';
$autoReplyBody = buildAutoReplyBody($fields, (string)($config['site_name'] ?? 'Website'));

try {
    $adminMail = createMailer($config);
    $adminMail->addAddress((string)$config['admin_email'], (string)($config['admin_name'] ?? ''));
    $adminMail->addReplyTo($fields['email'], $fields['name']);
    $adminMail->Subject = $subject;
    $adminMail->Body = $body;
    $adminMail->send();

    $replyMail = createMailer($config);
    $replyMail->addAddress($fields['email'], $fields['name']);
    $replyMail->Subject = $autoReplySubject;
    $replyMail->Body = $autoReplyBody;
    $replyMail->send();

    redirect($config['redirect_success'] ?? 'contact.html?sent=1');
} catch (Exception $e) {
    error_log('Contact mail failed: ' . $e->getMessage());
    redirect($config['redirect_error'] ?? 'contact.html?error=1');
}

function input(string $key): string
{
    return trim((string)($_POST[$key] ?? ''));
}

function inputArray(string $key): array
{
    $value = $_POST[$key] ?? [];
    if (!is_array($value)) {
        return [$value];
    }
    return array_values(array_filter(array_map(static fn($item) => trim((string)$item), $value)));
}

function createMailer(array $config): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = (string)$config['smtp']['host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string)$config['smtp']['username'];
    $mail->Password = (string)$config['smtp']['password'];
    $mail->SMTPSecure = (string)$config['smtp']['secure'];
    $mail->Port = (int)$config['smtp']['port'];
    $mail->setFrom((string)$config['from_email'], (string)$config['from_name']);
    $mail->isHTML(false);
    return $mail;
}

function buildAdminBody(array $fields, array $typeLabels): string
{
    $type = $typeLabels[$fields['type']] ?? $fields['type'];
    $topics = $fields['topics'] ? implode(', ', $fields['topics']) : 'None';

    return <<<BODY
New contact form submission.

Type: {$type}
Topics: {$topics}
Name: {$fields['name']}
Company: {$fields['company']}
Tel: {$fields['tel']}
Email: {$fields['email']}
Address: {$fields['address']}

Message:
{$fields['message']}
BODY;
}

function buildAutoReplyBody(array $fields, string $siteName): string
{
    return <<<BODY
Dear {$fields['name']},

Thank you for your inquiry.
We received the following message and will contact you after reviewing it.

Message:
{$fields['message']}

{$siteName}
BODY;
}

function redirect(string $to): void
{
    header('Location: ' . $to);
    exit;
}
