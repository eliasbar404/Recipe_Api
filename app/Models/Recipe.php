<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Recipe extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "recipes";

    protected $fillable = [

        'title',
        'description',
        'origin',
        'time',
        'difficulty',
        'views'
    ];

    /**
     * Get the steps for the recipe.
     */
    public function steps(): HasMany
    {
        return $this->hasMany(Step::class);
    }

    /**
     * Get the ingredients for the recipe.
     */
    public function ingredients(): HasMany
    {
        return $this->hasMany(Ingredient::class);
    }

    /**
     * Get the medias for the recipe.
     */
    public function images(): HasMany
    {
        return $this->hasMany(Recipe_media::class);
    }

    /**
     * Get the reviews for the recipe.
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
    /**
     * Get the favourite that owns the recipe.
     */
    public function favourites(): HasMany
    {
        return $this->hasMany(Favourite::class);
    }

    /**
     * Get the user that owns the recipe.
     */
    // public function user(): BelongsTo
    // {
    //     return $this->belongsTo(User::class);
    // }


}
