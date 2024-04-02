<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CartsController extends Controller
{
    public function showCart(){
        return Inertia::render('Cart', [
            'product' => User::only('cart'),
        ]);
    }
}
