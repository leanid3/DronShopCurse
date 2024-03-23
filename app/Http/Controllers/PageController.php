<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class PageController extends Controller
{
    public function Welcome()
    {
        $arrayProduct = Product::with('brand')->get();
        // $brand = $arrayProduct->brand;
        return Inertia::render(
            'Mainpage',
            [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'arrayProduct' => $arrayProduct,
                // 'brand' => $brand,
            ]
        );
    }
}
