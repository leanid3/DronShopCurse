<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductGRUDController;
Route::prefix('admin')->group(function(){

    Route::get('login', [AuthController::class, 'login']  );
    Route::post('login', [AuthController::class, 'login_proccess'] )->name('loginAdmin');

    Route::middleware('auth:admin')->group(function(){
        Route::get('/', [AdminController::class, 'index'])->name('adminMainPage');
        Route::resource('product', ProductGRUDController::class)->names([
            'create' => 'product.showCreate',
            'store' => 'product.create'
        ]);

    });
});



// Route::middleware('auth:admin')->group(function(){

//     Route::resource('/admin', AdminController::class)->('adminpanel');
// });
