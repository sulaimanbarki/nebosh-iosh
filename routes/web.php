<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CertificatesController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\RecordController;

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

Route::get('/optimize', function() {
    // run optimize command
    \Artisan::call('optimize');
    // clear cache
    \Artisan::call('cache:clear');
    // config cache
    \Artisan::call('config:clear');

    return 'DONE'; // return results
});

Route::redirect('/', 'login');

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
});

Route::get('/Validation/Details/{registration_id}', [RecordController::class, 'details'])->name('validation.details');

require __DIR__.'/auth.php';
