import RouteNotfound from '@/app/[...id]/page';
import Card from '@/app/component/reclamation/xl/card';
import React from 'react';

const Page = async  ({params}:{params:Promise<{id:string}>}) => {
    
    const { id } = await params;
    const parsedId = parseInt(id, 10);
    
    if(parsedId === 0 || parsedId > 4){
        return <RouteNotfound/>
    }
    
    const Pages= [
        {
            step:"STEP 1",
            description:'submit valid Governmnent ID',
        },
        {
            step:"STEP 2",
            description:"submit Official Recipt (OR) and Certificate of Registration (CR)"
        },
        {
            step:"STEP 3",
            description:'Towing Receipt or Violation Ticket'
        },
        {
            step:"STEP 4",
            description:"valid Driver's License"
        }
    ];
    
    return (
        <div className='h-screen bg-[#94A6FF] flex justify-center items-center relative'>
            <section className='hidden lg:flex h-screen items-center'>
                <Card pages={Pages} param={parsedId}/>
            </section>
        </div>
    );
};

export default Page;