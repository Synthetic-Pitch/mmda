'use server'
import MongoDbConnect from "../../../lib/mongoDbConnection";
import User from "@/model/login-model";

export async function CreateAccount(
    credential:{
        createUsername:string;
        createPassword:string;
        createGmail:string;
    }
){  
    await MongoDbConnect();
    try{    
        const { createUsername, createPassword, createGmail } = credential;
        // Use the credential parameter
        if(createUsername.trim() === '' && createPassword.trim() === '' && createGmail.trim() === ''){
            return 'Please fill all the fields';
        }
        await User.create({
            username:createUsername,
            password:createPassword,
            gmail:createGmail
        })
        return true;
    }
    catch(err){
        console.log(err);
        return false
    }
    
}