import { NextRequest, NextResponse } from "next/server";
import MongoDbConnect from "../../../../lib/mongoDbConnection";
import User from "@/model/login-model";
import { data } from "framer-motion/client";

export async function POST(request:NextRequest){
    await MongoDbConnect()
    try{
        const body = await request.formData();
        const loginUsername  = body.get('login_username');
        const loginPassword = body.get('login_password');
        
        if(!loginUsername || !loginPassword) {
            return NextResponse.json({message:"Please enter username and password"},{status:400});
        }
        const dbGet = await User.find({username:loginUsername,passord:loginPassword});
        if(dbGet.length === 0) {
            return NextResponse.json({message:"No user found"},{status:404});
        }
        return NextResponse.json({success:true,message:"user has found!",data,dbGet}, {status:200});
    }catch(error){
        return NextResponse.json({error,message:"Please check if it's FormData and passed all the required fields"},{status:500});
    }
    
}