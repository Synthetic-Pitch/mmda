import React from 'react';
import Link
 from 'next/link';
const Header = () => {
  return (
    <div className='w-full h-20 absolute'>
        <div className='flex items-center justify-end h-full w-full px-6 gap-4 font-kadwa text-white'>
            <Link href="impound-info">impound-info</Link>
            <Link href="faqs">faqs</Link>
            <Link href="contact-us">contact-us</Link>
            <Link href="about-us">about-us</Link>
        </div>
    </div>
  );
};

export default Header;