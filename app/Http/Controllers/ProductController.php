<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Inertia\Inertia;
use App\Models\Product;
use Egulias\EmailValidator\Parser\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
    public function showProduct($id) {
       $product = Product::with('brand', 'category')->findOrFail($id);
        return Inertia::render( 'Product', [
            'product' => $product
        ]);
    }

    public function addComments(Request $request){
        $data = $request->validate([
            'raiting' => ['required', 'integer','min:0', 'max:10',],
            'comment'=> ['required', 'min:5']
        ]);
    }

    public function showComments(){

        $comments = Comments::with('user')->get();
       
        return Inertia::render('Product', [
            'comments' =>$comments,
        ]);
    }
}
