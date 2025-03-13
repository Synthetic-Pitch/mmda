import React from 'react';

const Page = () => {
    return (
      <div className="relative bg-gray-500 h-[500px] flex justify-center items-center">
          <section className='w-[300px] h-[300px] bg-[pink] flex justify-center relative border-2 border-black'>
            <div className='w-[80%] h-20 rounded-full mt-10 border-2 border-black relative'>
              <label htmlFor="" 
                className='absolute -top-4 left-8 text-xl bg-transparent px-2 z-10'>
                  username
              </label>
            </div>
          </section>
      </div>
    );
};

export default Page;