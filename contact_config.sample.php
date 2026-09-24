<?php

return [
    // Copy this file to the parent directory of public_html as contact_config.php.
    // Never put the real SMTP password in Git or public_html.
    'site_name' => '株式会社タスカル',
    'site_origins' => ['https://tasukaru.xyz', 'https://www.tasukaru.xyz'],
    'admin_email' => 'mail@a-tasukaru.jp',
    'admin_name' => '株式会社タスカル',

    'smtp' => [
        'host' => 'sv00000.xserver.jp',
        'port' => 465,
        'username' => 'mail@a-tasukaru.jp',
        'password' => 'CHANGE_ME',
    ],

    'from_email' => 'mail@a-tasukaru.jp',
    'from_name' => '株式会社タスカル',
    'send_auto_reply' => false,

    'redirect_success' => 'contact.html?sent=1',
    'redirect_error' => 'contact.html?error=1',
];
