<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Follower extends Model
{
    use HasFactory;

    protected $table = "followers";

    protected $fillable = [
        'follower_id',
        'followed_id'
    ];

        /**
     * Get the user that owns the follower.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
