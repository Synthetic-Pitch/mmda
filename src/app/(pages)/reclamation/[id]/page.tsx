import React from 'react';


const Page =async  ({params}:{params:Promise<{id:string}>}) => {
    
    const {id} = await params;
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
          ID :{id}
        </div>
    );
};

export default Page;