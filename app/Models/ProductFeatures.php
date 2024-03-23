<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductFeatures extends Model
{
    public $timestamps = false;

    protected $fillblade = [
        'product_id',
        'videoTransmission',
        'battery',
        'receiverProtocol',
        'sizePropellers',
        'frameSize',
        'powerConnector',
        'FPV',
        'version',
    ];

    public function Product(){
        return $this->belongsTo(Product::class);
    }
}
