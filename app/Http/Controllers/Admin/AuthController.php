<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(){
        return Inertia::render('adminLogin');
    }
    public function login_proccess(Request $request){
      $data = $request->validate([
        'email' => ['required', 'exists:admin,email'],
        'password' => ['required'],
      ]);
      
      if (auth('admin')->attempt($data)){
        return redirect(route('adminpanel'));
    }
    }

}
