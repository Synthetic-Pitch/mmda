import { NextRequest, NextResponse } from 'next/server';
import MongoDbConnect from '../../../../../lib/mongoDbConnection';
import User from '@/model/login-model';

export async function POST(request: NextRequest){
    await MongoDbConnect()
    try{
        const body = await request.formData();
        const Username = body.get('username');
        const Password = body.get('password');
        const Gmail = body.get('gmail')

        const dbPost = await User.create({
            username:Username,
            password:Password,
            gmail:Gmail
        })
        
        return NextResponse.json({dbPost}, {status:200});
    }catch(error){
        return NextResponse.json({error,message:"Maybe check the 3 required fieilds if any of them is missing or typo"}, {status:500})
    }
}