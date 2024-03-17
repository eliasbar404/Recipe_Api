<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use App\Models\Recipe;


class Favourite extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "favourite";

    protected $fillable = [
        'user_id',
        'recipe_id'
    ];

    /**
     * Get the user that owns the favourite.
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
