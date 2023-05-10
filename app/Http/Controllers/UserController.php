<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;

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
    // Update user profile
    public function deleteUser(Request $request,$id){
        

    }
}
