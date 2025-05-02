import React from 'react';

interface PageProps{
    params: {id:string}
}

const Page = ({params}:PageProps) => {
    const {id} = params;

    // const Pages = [
    //     {
    //         step:"STEP 1",
    //         description:'submit valid Governmnent ID',
    //     },
    //     {
    //         step:"STEP 2",
    //         description:"submit Official Recipt (OR) and Certificate of Registration (CR)"
    //     },
    //     {
    //         step:"STEP 3",
    //         description:'Towing Receipt or Violation Ticket'
    //     },
    //     {
    //         step:"STEP 4",
    //         description:"valid Driver&apos;s License"
    //     }
    // ]

    return (
        <div>
           {id}
        </div>
    );
};

export default Page;