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

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/catalog/{id}', [ProductController::class, 'showProduct'])->name('showProduct');

// Route::get('/createform', [Rende rFormController::class, 'index'])->name('indexForm');

Route::post('/createformpost', [TestformController::class, 'submitdef'])->name('indexForm');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/search', [searchController::class, 'search'])->name('search');
Route::get('/answersearch', [searchController::class, 'answersearch'])->name('answersearch');
Route::get('/cart', [CartsController::class, 'showCart'])->name('Cart');
Route::middleware('auth')->controller(ProfileController::class)->group(function () {
    Route::get('/profile', 'edit')->name('profile.edit');
    Route::patch('/profile', 'update')->name('profile.update');
    Route::delete('/profile', 'destroy')->name('profile.destroy');
});

require __DIR__ . '/auth.php';
