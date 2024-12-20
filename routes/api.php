<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\testOpenAiApi;
use App\Http\Controllers\Authentication;
use  App\Http\Controllers\PlanController;
use App\Http\Controllers\RecordController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/httpApproach',[testOpenAiApi::class,'httpApproach']);

Route::post('/signup',[Authentication::class,'store']);
Route::post('/store_plan',[PlanController::class,'store']);

// api/details/{id}
Route::get('/details/{id}',[RecordController::class,'apiDetails']);