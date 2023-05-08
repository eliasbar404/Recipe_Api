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
    //----- Get One Recipe By Id -------
    //-----------------------------------
    public function GetOneById($id){
        $recipe = Recipe::find($id);
        return $recipe;
    }
    //----- Get Recipes By Category -------
    //-----------------------------------
    public function Get_Recipe_By_Category($category_id){
        $recipes = Recipe::where('cagegory_id',$category_id)->get();
        return $recipes;
    }
    //----- Set Recipe  -----------------
    //-----------------------------------
    public function Set_Recipe(Request $request){
        //------  Request Validation ---------
        // ----------------------------------
        $request->validate([

            "user_id"           =>"required",
            "category_id"       =>"required",
            "title"             =>"required",
            "description"       =>"required",
            "difficulty"        =>"required",
            "time"              =>"required",
            "steps_number"      =>"required",
            "ingredients_number"=>"required"

        ]);

        //-----  Create Recipe and return ID ------
        // ----------------------------------------
        $recipe_id = Recipe::create([
            "user_id"     =>$request->user_id,
            "category_id" =>$request->category_id,
            "title"       =>$request->title,
            "description" =>$request->description,
            "difficulty"  =>$request->difficulty,
            "time"        =>$request->time,
            "origin"      =>$request->origin,
        ])->id;

        $recipe_steps_numbers       = $request->steps_number;
        $recipe_ingredients_numbers = $request->ingredients_number;

    }

}
