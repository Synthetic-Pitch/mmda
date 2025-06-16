import React from 'react';
import im1 from '../../../../../public/assets/icons/search.png'
import im2 from '../../../../../public/assets/icons/github.png'
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

const Platforms = () => {
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
        <div className='w-full flex items-center justify-center'>
            <main className='w-[50%] bg-[#E5E5E5] px-[4%] py-[1.5%] rounded-4xl flex justify-evenly'>
                <Image src={im1} alt='' height={40} width={40} draggable={false} onClick={handleGoogleLogin}/>
                <Image src={im2} alt='' height={40} width={40} draggable={false} onClick={handleGithubLogin}/>
            </main>
        </div>
    );
};

export default Platforms;