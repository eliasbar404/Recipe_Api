<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('step_media', function (Blueprint $table) {
            $table->id();
            // Foreing Keys
            $table->unsignedBigInteger('step_id');
            $table->foreign('step_id')->references('id')->on('steps')->onDelete('cascade');
            
            $table->enum('type',['image','video']);
            $table->string('image_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('step_media');
    }
};
