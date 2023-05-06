<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe_media extends Model
{
    use HasFactory;

    protected $table = "recipe_media";

    protected $fillable = [
        'recipe_id',
        'type',
        'media'
    ];
}
