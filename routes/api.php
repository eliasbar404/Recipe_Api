<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\controllers\UserController;
use App\Http\Controllers\RecipeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// Auth Routes
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});
// Gategory Routes
Route::post('/categories', [CategoryController::class, 'setOne']);
Route::get('/categories',  [CategoryController::class, 'getAll']); 
// Users Routes

Route::post('/user', [UserController::class, 'updateUser']);
Route::get('/user/{id}', [UserController::class, 'getUser']);
Route::delete('/user/{id}', [UserController::class, 'deleteUser']);

Route::post('/follow', [UserController::class, 'make_follow']);
Route::post('/follow/delete', [UserController::class, 'delete_follow']);

// Recipe Routes
Route::post('/recipe',  [RecipeController::class, 'Set_Recipe']);
Route::get('/recipes',   [RecipeController::class, 'GetAll']); 
Route::get('/recipes/user/{id}',   [RecipeController::class, 'Get_All_User_Recipe']); 
Route::get('/recipe/{id}',   [RecipeController::class, 'GetOneById']); 
Route::post('/recipe/review',  [RecipeController::class, 'Recipe_review']);
Route::post('/fav',  [RecipeController::class, 'add_fav']);
Route::post('/fav/delete',  [RecipeController::class, 'delete_fav']);

Route::get('/fav/{id}',  [RecipeController::class, 'get_all_fav']);
