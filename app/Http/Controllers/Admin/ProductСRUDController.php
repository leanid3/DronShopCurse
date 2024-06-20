<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Brend;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductСRUDController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Product $product)
    {
        return Inertia::render('Admin/GRUDPoduct', [
            'products' => $product->with('category', 'brend')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreatePost', [
            'categories' => Category::select('categoryName', 'id')->get(),
            'brends' => Brend::select('brend', 'id')->get(),
            'status' => ['в наличии', 'нет в наличии'],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {

        $request->validated();

        $image = $request->file('postImage')->store('productImage', 'public');

        Product::create([
            'category_id' => $request->postCategory,
            'brend_id' => $request->postBrend,
            'title' => $request->postTitle,
            'description' => $request->postDescription,
            'rating' => $request->postRating,
            'price' => $request->postPrice,
            'status' => $request->postResRadio,
            'image' =>  '/storage/' . $image
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, $id)
    {

        $product->delete($id);
        return Redirect::back();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $hasProduct = Product::with('category', 'brend')->findOrFail($id);

        $brends = Brend::select('brend', 'id')->get();
        $categories = Category::select('categoryName', 'id')->get();

        return Inertia::render('Admin/UpdatePost', [
            'product' => $hasProduct,
            'brends' => $brends,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        $validatedData = $request->validated();

        // Если есть новое изображение, сохраняем его и удаляем старое
        if ($request->hasFile('image')) {
            $newImagePath = $request->file('image')->store('image', 'public');

            // Удаляем старое изображение, если оно есть
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }

            // Обновляем путь к изображению в данных продукта
            $validatedData['image'] = $newImagePath;
        }

        // Обновляем данные продукта
        $product->update($validatedData);

        // Перенаправляем на главную страницу админа
        return Redirect::route('adminMainPage');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, Request $productRequest)
    {
       $item = $product->find($productRequest->input('product_id'));
        $item->delete();
        return Redirect::back();
    }
}
