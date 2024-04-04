<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected  $product = [
        'category_id',
        "brand_id",
        "title",
        "description",
        'status',
        "rating",
        "price",
        "image"
     ];

     public function category()
     {
        return $this->belongsTo(Category::class);
     }
  
     public function brand()
     {
        return $this->belongsTo(Brand::class);
     }
  
     public function productFeatures()
     {
        return $this->hasMany(ProductFeatures::class);
     }
  
     public function comments(){
        return $this->hasMany(Comments::class)->orderBy('created_at');
     }

     public function carts(){
      return $this->hasMany(Carts::class);
     }
   }
