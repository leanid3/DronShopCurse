<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminController;
Route::controller(AuthController::class)->group(function(){

    Route::get('/login', 'login' )->name('Admin.login');
    Route::post('/login_proccess'. 'login_proccess')->name('Admin.login_proccess');
});

Route::middleware('auth:admin')->group(function(){

    Route::resource('/admin', AdminController::class);
});