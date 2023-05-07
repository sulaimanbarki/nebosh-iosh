<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\shortCode;
use Illuminate\Support\Str;
use  App\Models\User;

class Authentication extends Controller
{
    use shortCode;

    public function store(Request $request){
        $request->validate([
            "name"=>"required",
            "email"=>"required|email|unique:users,email",
            "password"=>"required|min:8"
        ]);
        
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'user_code'=>$this->runCode(),
            'user_uuid'=>(string)Str::uuid()
        ]);

        // Send mail here
     return response()->json(["msg"=>$request->name." has added successufly"]);
    }
}
