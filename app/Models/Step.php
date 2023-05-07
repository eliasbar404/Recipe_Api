<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;



class Step extends Model
{
    use HasFactory;

    protected $table = "steps";

    protected $fillable = [
        'recipe_id',
        'step_number',
        'description',
        'duration'
    ];

    /**
     * Get the media associated with the step.
     */
    public function media(): HasOne
    {
        return $this->hasOne(Step_media::class);
    }
}
