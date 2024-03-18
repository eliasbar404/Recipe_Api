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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->unique();
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role',['admin','user'])->default('user');
            $table->boolean('is_banned')->default(false);
            $table->enum('gender',['Male','Female'])->nullable();
            $table->longText('profile')->nullable();
            $table->string('profile_image_url')->nullable()->default('https://ik.imgkit.net/3vlqs5axxjf/BTNE/uploadedImages/import/bbt/2019/02/mysteriousguy-300px.jpg');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
