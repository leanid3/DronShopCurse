<?php

namespace App\Http\Controllers;

use App\Models\Testform;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TestformController extends Controller
{
    public function submitdef(Request $request){
        $request->validate([
            'name' => ['required', 'min:10'],
            'email' =>['required', 'email', 'exists:users,email'],
        ]);

        $message = Testform::create(
          $request->only('name', 'email')  
        );

        return Redirect::route('home');
    }
    
}
