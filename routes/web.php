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
use Illuminate\Http\Request;
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

// Route::redirect('/', 'login');
Route::get('/', function () {
    // not found
    return abort(404);
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

Route::get('/first-step/Details/{registration_id}', [RecordController::class, 'details'])->name('validation.details');
Route::get('/Validation/Details/{registration_id}', [RecordController::class, 'verification'])->name('validation.verification.step1');
Route::get('/ConfirmRequest/{id}', [RecordController::class, 'ConfirmRequest'])->name('validation.verification.step2');
Route::get('/Validation/CheckCertExists', [RecordController::class, 'checkCertExists'])->name('validation.verification.checkCertExists');
// Route::get('/Validation/CheckCertExists', function () {
//     return response()->json([
//         'failedCaptcha' => false,
//         'exists' => true,
//         'void' => false,
//         'certificateKey' => '1PSC1JGI1TK85RB4E70VIAAG',
//         'errorMessage' => null,
//         'learnerName' => 'Nadeem Akram',
//         'certMasterLog' => '00685517/1305342',
//         'certDate' => '2022-08-09'
//     ], 200);
// });
// http://127.0.0.1:8000/Validation/StoreCaptcha return 200
// {
//     "success": true,
//     "token": "zRgR86So0SNRlOUvp5plbA==|xISIkiom32dJRiB93ni8NlFVs6Q5DvETNBxXoMWVUSpmRYgaAO03ECtzBwbTJxQ+VEWxBHRo8FcOUyyrbea6MIpGMmgWnmhCyA97hYcq0tw=",
//     "expires": null
// }

// {"success":true,"expires":"2024-12-07T05:54:13.7774237+00:00"}

// {
//     "success": true,
//     "token": "Njkxptz/g9I8eO+4NZ7+cA==|JCoOzhcRrUa1apAFd6M8Mmu3JrgcvpnI21vB7bkgzHV5EJd93N7bar0oZpxM+1be4peNNuZQ1mxq//LKAFMDLWdV7IAqIQTlwfsAopA8xAI=",
//     "expires": null
// }
Route::get('/Validation/StoreCaptcha', function (Request $request) {
    // dd($request->all());
    return response()->json([
        'success' => true,
        'token' => 'Njkxptz/g9I8eO+4NZ7+cA==|JCoOzhcRrUa1apAFd6M8Mmu3JrgcvpnI21vB7bkgzHV5EJd93N7bar0oZpxM+1be4peNNuZQ1mxq//LKAFMDLWdV7IAqIQTlwfsAopA8xAI=',
        'expires' => null
    ], 200);
});

// http://127.0.0.1:8000/Validation/CheckCertExists
// {
//     "failedCaptcha": false,
//     "exists": true,
//     "void": false,
//     "certificateKey": "1PSC1JGI1TK85RB4E70VIAAG",
//     "errorMessage": null,
//     "learnerName": "Nadeem Akram",
//     "certMasterLog": "00685517/1305342",
//     "certDate": "2022-08-09"
// }

// http://127.0.0.1:8000/Validation/RequestValidation
// {
//     "failedCaptcha": false,
//     "certificateKey": "U420P5AW21UOIGD36XSTE6RN",
//     "exists": true,
//     "requestSentToOwner": true,
//     "certificateCancelled": false,
//     "errorMessage": null
// }

Route::get('/Validation/RequestValidation', [RecordController::class, 'validationRequest'])->name('validation.verification.validationRequest');
// Validation/CheckValidation
Route::get('/Validation/CheckValidation', [RecordController::class, 'checkValidation'])->name('validation.verification.checkValidation');
// Validation/CompleteRequest
Route::get('/Validation/CompleteRequest', [RecordController::class, 'completeRequest'])->name('validation.verification.completeRequest');


// Validation/ValidateCaptcha
// {"success":true,"expires":"2024-12-04T22:24:28.4323629+00:00"}
Route::get('/Validation/ValidateCaptcha', function () {
    return response()->json([
        'success' => false,
        // 'expires' => '2024-12-04T22:24:28.4323629+00:00'
        // two days from now
        'expires' => null
    ], 200);
});

Route::get('/test-captcha', function () {
    return view('admin.users.test');
});

require __DIR__ . '/auth.php';

// Preview static A4 certificate for a record id
Route::get('/certificate/preview/{id}', function ($id) {
    $record = \App\Models\Record::with('certificate')->findOrFail($id);
    return view('front.certificate_a4', compact('record'));
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

