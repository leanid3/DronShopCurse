<?php

use App\Http\Controllers\CartsController;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RenderFormController;
use App\Http\Controllers\searchController;
use App\Http\Controllers\TestformController;
use App\Models\Brand;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/catalog/{id}', [ProductController::class, 'showProduct'])->name('showProduct');

Route::post('/createformpost', [TestformController::class, 'submitdef'])->name('indexForm');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'radioitems' => Brand::pluck('brand')
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/search', [searchController::class, 'search'])->name('search');
Route::get('/answersearch', [searchController::class, 'answersearch'])->name('answersearch');

Route::middleware('auth')->group(function () {
    Route::get('/cart', [CartsController::class, 'showCart'])->name('cart');
    Route::post('/cart/add', [CartsController::class, 'addCart'])->name('addCart');
    Route::delete('/cart/remove', [CartsController::class, 'destroyCart'])->name('destroyCart');

    Route::get('/profile', [ProfileController::class,'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
