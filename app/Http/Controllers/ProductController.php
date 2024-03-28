<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
    public function showProduct($id) {
       $product = Product::with('brand')->findOrFail($id);
        return Inertia::render( 'Product', [
            'product' => $product
        ]);
    }
}
