<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;
    protected $filllable = [
        'user_id',
        'product_id',
        'comment'
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public function Product(){
        return $this->belongsTo(Product::class);
    }
}
