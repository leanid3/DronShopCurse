<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public $timestamps = false;

    protected $fillblade = [
        'brand'
    ];
    public function Product(){
        return $this->belongsTo(Product::class);
    }
}
