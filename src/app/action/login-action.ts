'use server'
import User from "@/model/login-model";
import MongoDbConnect from "../../../lib/mongoDbConnection";
import { revalidatePath } from "next/cache";


export async function LoginAction(credentials:{login_username:string,login_password:string}) {
    await MongoDbConnect();
    const usernameGET = await User.find({ username: credentials.login_username });
    const passwordGET = await User.find({ password: credentials.login_password });

    const result = {
        username: true,
        password: true
    };
    
    if (usernameGET.length === 0 && passwordGET.length === 0) {
        result.username = false;
        result.password = false;
    } else {
        if (usernameGET.length === 0) {
            result.username = false;
        }
        if (passwordGET.length === 0) {
            result.password = false;
        }
    }

    console.log(result);
    revalidatePath('/');
    return result;
}
