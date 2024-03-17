<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Step;
use App\Models\Step_media;
use App\Models\Ingredient;
use App\Models\Recipe_media;
use App\Models\Review;
use App\models\Favourite;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Str;

use function PHPUnit\Framework\isNull;

class RecipeController extends Controller
{
    //----- Get All Recipes-------
    //----------------------------
    public function GetAll(){
        // $recipe = Recipe::find(20);
        // $steps = [];
        // foreach($recipe->steps as $step){
        //     array_push($steps,$step->media);

        // };
        // return response([
        //     "recipe"      =>$recipe,
        //     "steps"       =>$steps,
        //     "ingredients" =>$recipe->ingredients,
        //     "medias"      =>$recipe->medias
        // ]);
        $recipes = Recipe::all();
        $final = [];
        foreach($recipes as $recipe){
            $rating_list = [];
            foreach(Recipe::find($recipe->id)->reviews as $review){
                array_push($rating_list,$review->rating);
            }
            $rating =count($rating_list) == 0? 0:array_sum($rating_list)/count($rating_list);
            array_push($final,[
                "recipe"=>$recipe,
                "images"=>$recipe->images,
                "rating"=>$rating,
            ]);
        };
        return $final;

        // return $recipe;
    }

    //--------Get All recipes belong to a user -------
    // -----------------------------------------------

    public function Get_All_User_Recipe($id){

        $recipes = Recipe::where('user_id',$id)->get();

        return response([
            "recipes"      =>$recipes,
            "user"        =>$recipes[0]->user,
        ]);
    }








    //----- Get One Recipe By Id -------
    //-----------------------------------
    public function GetOneById($id){
        $recipe = Recipe::find($id);

        $reviews = [];
        $rating_list = [];
        foreach($recipe->reviews as $review){
            array_push($reviews,["review"=>$review,"user"=>$review->user]);

        };

        $rating = 0;
        if(count($recipe->reviews)>0){
            foreach($recipe->reviews as $review){
                array_push($rating_list,$review->rating);
            };

            $rating = floatval(array_sum($rating_list)/count($rating_list));
        }

        
        

        return [
            "recipe"       =>$recipe,
            // "user"         =>$recipe->user,
            "reviews"      =>$reviews,
            "rating"       =>$rating, 
            "steps"        =>$recipe->steps,
            "ingredients"  =>$recipe->ingredients,
            "images"       =>$recipe->images
        ];
    }
    //----- Get Recipes By Category -------
    //-------------------------------------
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

            // "user_id"           =>"required",
            "categories"        =>"required",
            "title"             =>"required",
            "description"       =>"required",
            "difficulty"        =>"required",
            "time"              =>"required",
            "steps"             =>"required",
            "ingredients"       =>"required",
            "images"            =>"required"

        ]);

        // -----  Create Recipe and return ID ------
        // ----------------------------------------
        $recipe_id = Recipe::create([
            // "user_id"     =>$request->user_id,
            // "category_id" =>$request->category_id,
            "title"       =>$request->title,
            "description" =>$request->description,
            "difficulty"  =>$request->difficulty,
            "time"        =>$request->time,
            "origin"      =>$request->origin,
        ])->id;


                    // Save Recipe Categories
                    for($i=0;$i<count($request->categories);$i++){

                        if(isset($request["categories"][$i])){
                            DB::table('category_recipe')->insert([
                                "recipe_id"    =>$recipe_id,
                                "category_id"  =>$request->categories[$i]
                            ]);
                        }
                    }

        //-----Save Recipe Steps-----------
        // -------------------------------
        for($i=0;$i<count($request->steps);$i++){

            $step_id = Step::create([
                "recipe_id"   =>$recipe_id,
                "step_number" =>$i+1,
                "description" =>$request->steps[$i]["description"],
                "duration"    =>$request->steps[$i]["duration"]
            ])->id;

            // $array = $request["files"]["steps_media"];
            // $item  = $request["files"]["steps_media"][$i];
            // if(isset($request["files"]["steps_media"][$i])){

            //     $filename = Str::random(32).".".$request["files"]["steps_media"][$i]->getClientOriginalExtension();
            //     $request["files"]["steps_media"][$i]->move('uploads/', $filename);
    
            //     Step_media::create([
            //         "step_id"=>$step_id,
            //         "media"  =>$filename,
            //         "type"   =>$request->steps[$i]["type"]
            //     ]);
            // }

        }
        //-----Save Recipe Ingredients-----------
        // -------------------------------
        for($i=0;$i<count($request->ingredients);$i++){

            // $filename = isset($request["files"]["ingredients_media"][$i])?(Str::random(32).".".$request["files"]["ingredients_media"][$i]->getClientOriginalExtension()):null;
            // // $filename = Str::random(32).".".$request["files"]["ingredients_media"][$i]->getClientOriginalExtension();
            // if(isset($request["files"]["ingredients_media"][$i])){

            //     $request["files"]["ingredients_media"][$i]->move('uploads/', $filename);

            // }

                Ingredient::create([
                    "recipe_id"      =>$recipe_id,
                    "description"    =>$request->ingredients[$i]["description"],
                    "image_url"      =>$request->ingredients[$i]["image_url"]
                ]);

            

        





        }
        //-----Save Recipe Medias-----------
        // -------------------------------
        for($i=0;$i<count($request->images);$i++){

            // if(isset($request["images"][$i])){

                // $filename = Str::random(32).".".$request["files"]["recipe_media"][$i]->getClientOriginalExtension();
                // $request["files"]["recipe_media"][$i]->move('uploads/', $filename);
    
    
                Recipe_media::create([
                    "recipe_id"   =>$recipe_id,
                    // "type"        =>$request->images[$i]["type"],
                    "image_url"       =>$request->images[$i]["image_url"]
                ]);
            // }
        }
    





        // if ($request->hasFile('recipe_medias')) {
            // $filename = Str::random(32).".".$request["files"]["recipe_media"][0]->getClientOriginalExtension();
            // return response($filename);

        // }
        return response("done!");

}
        

    
    public function Recipe_review(Request $request){

        $request->validate([
            "user_id" => "required",
            "recipe_id" => "required",
            "rating" => "required",
            "comment" => "required",
        ]);

        // Review::firstOrCreate(
        //     [
        //         "user_id"  =>$request->user_id,
        //         "recipe_id"=>$request->recipe_id,
        //     ]
        //     ,[
        //     "user_id"  =>$request->user_id,
        //     "recipe_id"=>$request->recipe_id,
        //     "rating"   =>$request->rating,
        //     "comment"  =>$request->comment
        // ]);

        Review::create([
            "user_id"  =>$request->user_id,
            "recipe_id"=>$request->recipe_id,
            "rating"   =>$request->rating,
            "comment"  =>$request->comment

        ]);

        return response("this is create");




    }

    public function add_fav(Request $request){

        $request->validate([
            "user_id"   =>"required",
            "recipe_id" =>"required"
        ]);


        Favourite::firstOrCreate(
            [
                "user_id"  =>$request->user_id,
                "recipe_id"=>$request->recipe_id,
            ]
            ,[
            "user_id"  =>$request->user_id,
            "recipe_id"=>$request->recipe_id
        ]);
        
        return response("done");

    }

    public function get_all_fav($id){
        
        $Favourite = Favourite::where("user_id",$id)->get();
        $recipes = [];
        foreach($Favourite as $fav){
            array_push($recipes,$fav->recipe);
        }
        $final = [];
        foreach($recipes as $recipe){
            $rating_list = [];
            foreach(Recipe::find($recipe->id)->reviews as $review){
                array_push($rating_list,$review->rating);
            }
            $rating =count($rating_list) == 0? 0:array_sum($rating_list)/count($rating_list);
            array_push($final,[
                "recipe"=>$recipe,
                "medias"=>$recipe->medias,
                "user"  =>$recipe->user,
                "rating"=>$rating,
            ]);
        };
        return $final;

        // return $final;

    }


    public function delete_fav(Request $request){
        $request->validate([
            "user_id"=>"required",
            "recipe_id"=>"required"
        ]);

        Favourite::where("user_id",$request->user_id)->where("recipe_id",$request->recipe_id)->delete();
        return response("done");
    }

}
