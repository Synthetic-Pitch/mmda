'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import LoginContainer from './login-container';
import CreateContainer from './create-container';


type State = {
    effectSlice: {
        createAccount: boolean;
    };
};
const Condition = () => {
    const createOrder = useSelector((state: State) => state.effectSlice.createAccount);

    return (
        <div className='h-full w-full'>
            {
               ! createOrder ? (
                    <LoginContainer/>
               ):(
                    <CreateContainer/>
               )
            }
        </div>
    )
}
export default Condition