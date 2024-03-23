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
        "price",
        "image"
     ];
     public function Categories()
     {
        return $this->belongsTo(Category::class);
     }
  
     public function brand()
     {
        return $this->hasMa(Brand::class);
     }
  
     public function ProductFeatures()
     {
        return $this->hasMany(ProductFeatures::class);
     }
  
     public function Comments(){
        return $this->hasMany(Comments::class)->orderBy('created_at');
     }
}
