# Mail Setup

Xserverで問い合わせフォームを送信するためのPHPMailer下地です。

## 1. PHPMailerを入れる

ローカルまたはXserver上でComposerを使える場合:

```sh
composer install --no-dev
```

Xserver上でComposerを使わない場合は、PHPMailerを手動配置し、`vendor/autoload.php` が存在する構成にしてください。

## 2. 設定ファイルを作る

```sh
cp contact_config.sample.php contact_config.php
```

`contact_config.php` の以下をXserverのメール情報に変更します。

- `admin_email`
- `smtp.host`
- `smtp.username`
- `smtp.password`
- `from_email`

`contact_config.php` は `.gitignore` に入れているため、パスワードはGit管理されません。

## 3. contact.htmlをPHP送信へ向ける

`contact.html` のフォームは `contact-send.php` にPOSTする想定です。
本番反映後、Xserver上で送信テストを行ってください。

## 4. 送信されるメール

- 管理者宛: 問い合わせ内容
- お客様宛: 自動返信

## 5. 注意

Xserver側で独自ドメインメールを作成し、SPF/DKIM/DMARCを整えてから使うと迷惑メール判定を受けにくくなります。
