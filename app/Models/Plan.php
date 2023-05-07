<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sub_title',
        'slug',
        'price',
        'duration',
        'icon_path',
        'status',
    ];
}
