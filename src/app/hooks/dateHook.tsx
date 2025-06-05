'use client'
import { useEffect, useState } from 'react';

const UseDateHook = () => {
    const [date,setDate] = useState<string>('');
    const [code,setCode] = useState<string>('');

    useEffect(()=>{
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Manila' });
        setDate(today);
        
        switch(today){
            case "Monday" :
                setCode('1-2')
                break;
            case "Tuesday" :
                setCode('3-4')
                break;
            case "Wendnesday" :
                setCode('5-6')
                break;
            case "Thursday" :
                setCode('7-8')
                break;
            case "Friday" :
                setCode('9-0')
                break;
            default :
                setCode("no coding")
        }
    },[])

    return {date,code};
};

export default UseDateHook;