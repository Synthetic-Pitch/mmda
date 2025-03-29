'use client'
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react';

const Home = () => {

    return (
        <div className='flex justify-center mt-8'>
            <Button onClick={()=>{signOut({callbackUrl:`/`})}}>sign out</Button>
        </div>
    );
};

export default Home;