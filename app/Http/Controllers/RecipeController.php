<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    //----- Get All Recipes-------
    //----------------------------
    public function GetAll(){
        $recipes = Recipe::all();
        return $recipes;
    }
    //----- Get One Recipes By Id -------
    //-----------------------------------
    public function GetOne($id){
        $recipe = Recipe::find($id);
        return $recipe;
    }

}
