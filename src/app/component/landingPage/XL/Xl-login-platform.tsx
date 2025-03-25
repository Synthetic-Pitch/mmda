'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

const XlLoginPlatform = () => {
    const { status } = useSession();
    // Update the state when session status changes
    useEffect(() => {
        console.log(status);
    }, [status]);
    
    const handleGoogleLogin = async () => {
        await signIn('google', { callbackUrl: '/home' });
    };
    const handleFacebookLogin = async () => {
        await signIn('facebook', { callbackUrl: '/home' });
    };
    const handleGithubLogin = async () => {
        await signIn('github', { callbackUrl: '/github' });
    };
    
    return (
        <div className='h-[70%] w-[70%] bg-[rgb(229,229,229,.42)] flex items-center rounded-3xl px-2 select-none'>
            <div className='h-[60%] w-[30%] relative cursor-pointer' onClick={handleFacebookLogin}>
                <Image src="/assets/icons/facebook.png" alt='' fill draggable={false} className='object-contain' />
            </div>
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
