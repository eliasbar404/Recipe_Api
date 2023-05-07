<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ingredient extends Model
{
    use HasFactory;

    protected $table = "ingredients";

    protected $fillable = [
        'recipe_id',
        'name',
        'quantity',
        'media'
    ];

    /**
     * Get the recipes that owns the ingredient.
     */
    public function recipes(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }
}
