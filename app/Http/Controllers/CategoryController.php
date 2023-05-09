<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;


class CategoryController extends Controller
{
    //get All Categories
    public function getAll(){
        $categories = Category::all();
        return $categories;
    }

    //set Category
    public function setOne(Request $request){

        $request->validate([
            "name"        => "required",
            "description" => "required"
        ]);
        Category::create([
            "name"=>$request->name,
            "description"=>$request->description
        ]);
        return response("the opperation is successed!");
    }
}
