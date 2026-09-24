<?php

return [
    'site_name' => 'Tasukaru',
    'admin_email' => 'mail@a-tasukaru.jp',
    'admin_name' => 'Tasukaru',

    'smtp' => [
        'host' => 'sv00000.xserver.jp',
        'port' => 465,
        'secure' => 'ssl',
        'username' => 'mail@a-tasukaru.jp',
        'password' => 'CHANGE_ME',
    ],

    'from_email' => 'mail@a-tasukaru.jp',
    'from_name' => 'Tasukaru',

    'redirect_success' => 'contact.html?sent=1',
    'redirect_error' => 'contact.html?error=1',
];
