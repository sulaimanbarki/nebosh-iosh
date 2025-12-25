<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\UsersController;
use Spatie\Backup\Tasks\Backup\BackupJob;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CertificatesController;
use Spatie\Backup\BackupDestination\BackupDestinationFactory;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/optimize', function () {
    // run optimize command
    \Artisan::call('optimize');
    // clear cache
    \Artisan::call('cache:clear');
    // config cache
    \Artisan::call('config:clear');

    return 'DONE'; // return results
});

Route::redirect('/', 'admin/login');

Route::get('/dashboard', [PagesController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('users', UsersController::class);
    Route::resource('plans', PlansController::class);
    // characters  
    Route::resource('certificates', CertificatesController::class);
    Route::resource('records', RecordController::class);
    Route::get('change-status/{id}', [RecordController::class, 'changeStatus'])->name('change.status');
});

Route::get('/Validation/Details/{registration_id}', [RecordController::class, 'details'])->name('validation.details');

require __DIR__ . '/auth.php';

// Preview static A4 certificate for a record id
Route::get('/certificate/preview/{id}', function ($id) {
    $record = \App\Models\Record::with('certificate')->findOrFail($id);
    return view('front.certificate', compact('record'));
});


Route::get('/backupdb', function () {
    try {
        $tables = DB::select('SHOW TABLES');

        $output = '';
        foreach ($tables as $table) {
            $table = get_object_vars($table);
            $tableName = current($table);

            $showTableQuery = "SHOW CREATE TABLE $tableName";
            $createTable = DB::select($showTableQuery)[0]->{'Create Table'};
            $output .= "\n\n" . $createTable . ";\n\n";

            $selectRowsQuery = "SELECT * FROM $tableName";
            $rows = DB::select($selectRowsQuery);

            foreach ($rows as $row) {
                $row = (array)$row;
                $values = implode("', '", array_map('addslashes', $row));
                $output .= "INSERT INTO $tableName VALUES ('$values');\n";
            }
        }

        // Set file name and path
        $fileName = 'database_backup_' . date('Y-m-d_H-i-s') . '.sql';
        $filePath = storage_path('app/' . $fileName);

        // Write output to the backup file
        file_put_contents($filePath, $output);

        // Set headers for file download
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $fileName . '"');
        header('Content-Length: ' . filesize($filePath));
        header('Pragma: no-cache');
        header('Cache-Control: must-revalidate');
        header('Expires: 0');
        readfile($filePath);

        // Delete the backup file after download
        unlink($filePath);

        exit;
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
});

