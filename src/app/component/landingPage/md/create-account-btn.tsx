import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setcreateAccount} from '@/app/redux/effectSlice';
import {setTypeError_Username,setTypeError_Password,setBtnTrigger} from '@/app/redux/login'
import { LoginAction } from '@/app/action/login-action'
import { useRouter } from 'next/navigation';



type State = {
    loginSlice:{
        loginState:{
            login_username:string;
            login_password:string;
        },
        inputTypeError:{
            username:false,
            password:false
        },
      
    }
}

const CreateAccountBtn = () => {
    const dispatch = useDispatch();
     const credentials = useSelector((state:State)=>state.loginSlice.loginState);
    const router = useRouter();
    const handleCreateAccount = () => {
        dispatch(setcreateAccount());
    }

    const handleLogin = async  () => {
        // check if the username and password is valid thens set setTypeError_Username/setTypeError_Password
        
        const results = await LoginAction(credentials);
        console.log(results);
        
        if(!results.username){
            dispatch(setTypeError_Username(true));
        }else dispatch(setTypeError_Username(false));
        
        if(!results.password){
            dispatch(setTypeError_Password(true))
        } else dispatch(setTypeError_Password(false))
   
        
        if(results.username && results.password){
         
            const uiid = crypto.randomUUID();
            router.push(`/${uiid}`);
        }
        
        dispatch(setBtnTrigger());
    }
    return (
        <div className='font-krona-One w-full flex flex-col justify-center'>
            <button 
                onClick={handleLogin}
                className='cursor-pointer text-[14px] hover:underline'>Log in</button>
            <button className='cursor-pointer text-[14px]  hover:underline' onClick={handleCreateAccount}>create account</button>
            <div className='w-full h-[30px] flex justify-center items-center gap-[3%]'>
                <hr className='m-0 p-0 h-[4px] w-[29%] bg-black'/>
                <span>OR</span>
                <hr className='m-0 p-0 h-[4px] w-[29%] bg-black'/>
            </div>
        </div>
    );
};

export default CreateAccountBtn;