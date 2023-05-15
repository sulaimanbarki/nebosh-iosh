<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class BackupDatabase extends Command
{
    protected $signature = 'backup:database';
    protected $description = 'Backup the entire database';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $database = config('database.connections.mysql.database');
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');
        $backupPath = storage_path('app/backup/db_backup.sql');

        $command = sprintf(
            'mysqldump -u %s -p"%s" %s > %s',
            $username,
            $password,
            $database,
            $backupPath
        );

        exec($command);

        $this->info('Database backup created successfully: ' . $backupPath);
    }
}
