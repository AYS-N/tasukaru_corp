# Xserver 問い合わせフォームの配置

公開ドメインは `tasukaru.xyz`、受信先とSMTPアカウントは既存の `mail@a-tasukaru.jp` を使う。

## 配置

Xserverの対象ドメインフォルダでは、秘密情報とライブラリを `public_html` の外に置く。

```text
tasukaru.xyz/
├─ contact_config.php       ← 実際のSMTP設定（Gitに入れない）
├─ composer.json            ← リポジトリの composer.json をコピー
├─ vendor/                  ← PHPMailerをComposerで導入
├─ contact-rate-limit.json  ← 初回送信時に自動作成
└─ public_html/
   ├─ contact.html
   ├─ contact-send.php
   └─ その他のサイトファイル
```

1. リポジトリ直下のサイトファイルを `public_html/` に配置する。`project/` は旧デザインの出力で、公開用サイト本体ではない。
2. `contact_config.sample.php` を対象ドメインフォルダ直下に `contact_config.php` としてコピーする。Xserverのメールソフト設定で確認したSMTPホスト名と、既存の `mail@a-tasukaru.jp` のパスワードをそのファイルに設定する。パスワードをGitHub、チャット、`public_html/` に置かない。
3. `composer.json` を対象ドメインフォルダ直下にコピーし、その場所で `composer install --no-dev --optimize-autoloader` を実行する。サーバー上でComposerを実行できない場合は、対応するPHP環境で生成した `vendor/` を対象ドメインフォルダ直下へ配置する。
4. 対象ドメインフォルダ直下にPHPが書き込めることを確認する。送信回数の記録ファイルを作れない場合、フォームは送信せずエラーになる。
5. `https://tasukaru.xyz/contact.html` で送信し、`mail@a-tasukaru.jp` への到着と返信先を確認する。誤入力・連続送信の表示も確認する。

`tasukaru.xyz` のPHPバージョンはXserverの「PHP Ver.切替」で、サポート中の8.4系などに設定する。7.4系はPHP公式のサポートが終了している。

自動返信は初期状態では無効。必要な場合のみ `contact_config.php` の `send_auto_reply` を `true` にする。送信回数の上限はIPごとに15分で5件、全体で1時間に100件。

フォームは `site_origins` に列挙したドメインからの送信だけを受け付ける。公開URLを変更する場合は、この設定も合わせて変更する。
