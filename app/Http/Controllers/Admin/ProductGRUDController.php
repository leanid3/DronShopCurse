<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Brend;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductGRUDController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    // public function index()
    // {
    //     inertia()
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreatePost', [
            'categories' => Category::select('categoryName', 'id')->get(),
            'brends' => Brend::select('brend', 'id')->get(),
            'status' => ['в наличии', 'нет в наличии']
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {

        $request->validated();

        $image = $request->file('postImage')->store('productImage', 'public');

        // $image = $request->file('postImage');
        // $imageName = time() . '.' . $image->getClientOriginalExtension();
        // $image->storeAs('public/productImage',$imageName);

        Product::create([
            'category_id' => $request->postCategory,
            'brend_id' => $request->postBrend,
            'title' => $request->postTitle,
            'description' => $request->postDescription,
            'rating' => $request->postRating,
            'price' => $request->postPrice,
            'status' => $request->postResRadio,
            'image' =>  '/storage/'.$image
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
