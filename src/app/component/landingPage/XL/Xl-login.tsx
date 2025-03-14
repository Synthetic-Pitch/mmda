import React from 'react';
import XlForm from './Xl-form';
import XlLoginCreate from './Xl-login-create';
import XlLoginPlatform from './Xl-login-platform';

const XlLogin = () => {
    return (
        <div className='w-[350px] h-[80%] max-h-[500px] py-10 px-6 bg-[rgb(217,217,217,.65)] -mt-[60px] rounded-4xl'>
            <section className='h-[45%] w-full'>
                <XlForm/>
            </section>
            <main className='pt-2 w-full h-[25%]'>
                <XlLoginCreate/>
            </main>
            <section className='w-full flex items-center justify-center gap-4 select-none'>
                <div className='h-[2px] w-[30%] bg-black '/>
                <div className='font-koulen'>or</div>
                <div className='h-[2px] w-[30%] bg-black '/>
            </section>
            <footer className='w-full h-[25%] flex justify-center items-center'>
                <XlLoginPlatform/>
            </footer>
        </div>
    );
};

export default XlLogin;