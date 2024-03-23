<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;

    protected $fillblade = [
        'categoryName',
        'descriptionCategory',
    ];
    public function Products(){
        return $this->hasMany(Product::class);
    }
}
