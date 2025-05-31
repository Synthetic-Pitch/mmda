import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setTypeError_Username,setTypeError_Password,setBtnTrigger} from '@/app/redux/login';
import { LoginAction } from '@/app/action/login-action';
import {setcreateAccount} from '@/app/redux/effectSlice'


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

const LoginPhase2 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const credentials = useSelector((state:State)=>state.loginSlice.loginState);

 

  const handleLogin = async  () => {
    // check if the username and password is valid thens set setTypeError_Username/setTypeError_Password
    const results = await LoginAction(credentials);
    
    if(!results.username){
        dispatch(setTypeError_Username(true));
    }else dispatch(setTypeError_Username(false));
    
    if(!results.password){
        dispatch(setTypeError_Password(true));
    } else dispatch(setTypeError_Password(false));
    
    if(results.username && results.password){
        const uiid = 'home';
        router.push(`/${uiid}`);
    }
    dispatch(setBtnTrigger());
  }

    const handleCreateAccount = () => {
        dispatch(setcreateAccount());
    }
      
  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly font-krona-One'>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleCreateAccount}>create account</button>
        <div className='flex items-center justify-center gap-3'>
            <hr className='h-[3px] bg-black w-[100px]'/>
            
            <span>OR</span>
            <hr className='h-[3px] bg-black w-[100px]'/>
        </div>
    </div>
  );
};

export default LoginPhase2;