<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Follower;
use Illuminate\Support\Str;

use function PHPUnit\Framework\isNull;

class UserController extends Controller
{
    // /**
    //  * Create a new AuthController instance.
    //  *
    //  * @return void
    //  */
    // public function __construct() {
    //     $this->middleware('auth:api');
    // }

    // Update user profile
    public function updateUser(Request $request){

        $request->validate([
            'id'            => "required",
            'first_name'    => "required",
            'last_name'     => "required",
            'email'         => "required",
            'new_password'  => "required",
            'gender'        => "required",
            'profile'       => "required",
            'image'         => "nullable|file"
        ]);


        if ($request->hasFile('image')) {
            $filename = Str::random(32).".".$request->file('image')->getClientOriginalExtension();
            $request->file('image')->move('uploads/', $filename);


            $user = User::where('id',$request->id)->update([
                'first_name' => $request->first_name,
                'last_name'  => $request->last_name,
                'email'      => $request->email,
                'password'   => bcrypt($request->new_password),
                'gender'     => $request->gender,
                'profile'    => $request->profile,
                'image'      => $filename
            ]);
    
            return response('update profile success!');








        }





    }

    // Get User
    public function getUser($id){



        $user = User::find($id);

        $recipes = [];
        foreach($user->recipes as $recipe){
            array_push($recipes,["recipe"=>$recipe,"user"=>$recipe->user,"medias"=>$recipe->medias]);
        }
        return [
            "user"=>$user,
            "recipes"=>$recipes,
            "followers"=>$user->followers,
            "followers_number"=>count($user->followers)
        ];
    }
    // Update user profile
    public function deleteUser(Request $request,$id){
        

    }




    public function make_follow(Request $request){

        $request->validate([
            "follower_id"=>"required",
            "followed_id"=>"required"
        ]);
        
        // $val = Follower::where("follower_id","=",$request->follower_id)->where("followed_id","=",$request->followed_id)->get();
        // if(isNull($val)){

            
            $follower = Follower::firstOrCreate(
                [
                    "follower_id"=>$request->follower_id,
                    "followed_id"=>$request->followed_id
                ]
            ,[
                "follower_id"=>$request->follower_id,
                "followed_id"=>$request->followed_id
            ]);

    
            if(Follower::find($follower->id)){
                return response("there is an error");
            }

            return response($follower);
            

        // }
        // else{

        //     return response("error");


        // }

        


        

    }

    public function delete_follow(Request $request){

        $request->validate([
            "follower_id"=>"required",
            "followed_id"=>"required"
        ]);

        Follower::where("follower_id",$request->follower_id)->where("followed_id",$request->followed_id)->delete();


        return response("the follow is deleted");
    }




}
