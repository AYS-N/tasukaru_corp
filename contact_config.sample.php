<?php

return [
    'site_name' => 'Tasukaru',
    'admin_email' => 'info@example.com',
    'admin_name' => 'Tasukaru',

    'smtp' => [
        'host' => 'sv00000.xserver.jp',
        'port' => 465,
        'secure' => 'ssl',
        'username' => 'info@example.com',
        'password' => 'CHANGE_ME',
    ],

    'from_email' => 'info@example.com',
    'from_name' => 'Tasukaru',

    'redirect_success' => 'contact.html?sent=1',
    'redirect_error' => 'contact.html?error=1',
];
