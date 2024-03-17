<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Recipe;
use App\Models\User;

class Review extends Model
{
    use HasFactory;
    // use SoftDeletes;

    protected $table = "reviews";

    protected $fillable = [
        'recipe_id',
        'user_id',
        'comment',
        'rating',
        'image_url'
    ];

    /**
     * Get the user that owns the review.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function recipe(): BelongsTo
    {
        return $this->belongsTo(Recipe::class);
    }
}
