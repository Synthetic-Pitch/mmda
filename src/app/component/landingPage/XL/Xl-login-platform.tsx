'use client';
import React from 'react';
import Image from 'next/image';
import { signIn ,useSession } from 'next-auth/react';

const XlLoginPlatform = () => {
    const {data } = useSession();
    
    const handleGoogleLogin = async () => {
        await signIn('google', {
          callbackUrl: `/user?=${data?.user?.name}`
        });
    };
    const handleGithubLogin = async () => {
        await signIn('github', {
            callbackUrl: `/user?=${data?.user?.name}`
        });
    };
    
    return (
        <div 
            className='h-[70%] w-[60%] bg-[rgb(229,229,229,.42)] rounded-3xl px-2 select-none flex items-center justify-center gap-[6%]'>
            <div className='h-[60%] w-[30%] relative cursor-pointer' onClick={handleGoogleLogin}>
                <Image src="/assets/icons/search.png" alt='' fill draggable={false} className='object-contain' />
            </div>
            <div className='h-[60%] w-[30%] relative cursor-pointer' onClick={handleGithubLogin}>
                <Image src="/assets/icons/github.png" alt='' fill draggable={false} className='object-contain' />
            </div>
        </div>
    );
};

export default XlLoginPlatform;
