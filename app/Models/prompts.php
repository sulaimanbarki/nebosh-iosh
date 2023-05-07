<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class prompts extends Model
{
    use HasFactory;

    protected $fillable = ['prompt','completion', 'user_id', 'character_id'];
}
