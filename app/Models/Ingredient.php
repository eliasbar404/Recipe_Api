<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ingredient extends Model
{
    use HasFactory;
    // use SoftDeletes;

    protected $table = "ingredients";

    protected $fillable = [
        'recipe_id',
        'description',
        'image_url'
    ];

    /**
     * Get the recipes that owns the ingredient.
     */
    public function recipes(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }
}
