<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step_media extends Model
{
    use HasFactory;

    protected $table = "step_media";

    protected $fillable = [
        'step_id',
        'type',
        'media'
    ];
}
