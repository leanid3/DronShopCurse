<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class PageController extends Controller
{
    public function Welcome(Product $product)
    {

        $arrayProduct = $product->with('brand')->with('categories')->get();
        return Inertia::render(
            'Mainpage',
            [
                // 'auth' => Auth::user(),
                'arrayProduct' => $arrayProduct,
            ]
        );
    }
    public function cart()
    {
        return Inertia::render('Cart');
    }
}
