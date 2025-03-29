import XlHeader from '@/app/component/about-us/XL/xl-header';
import XlUpperBody from '@/app/component/about-us/XL/xl-upper-body';
import React from 'react';

const Page = () => {

    return (
        <div className='flex flex-col'>
            <XlHeader/>
            <XlUpperBody/>
        </div>
    );
};

export default Page;