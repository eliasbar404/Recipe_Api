<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    use HasFactory;

    protected $table = "favourite";

    protected $fillable = [
        'user_id',
        'recipe_id'
    ];
}
