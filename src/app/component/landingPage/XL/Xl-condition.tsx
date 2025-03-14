'use client'
import React from 'react';
import XlLogin from './Xl-login';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import XlCreateAccount from './xl-create-account';



type State = {
    effectSlice: {
        createAccount: boolean;
    };
};

const XlCondition = () => {
    const createOrder = useSelector((state: State) => state.effectSlice.createAccount);
    
    return (
        <div className="w-full h-full relative">
           <AnimatePresence mode="popLayout">
                {!createOrder ? (
                    <motion.div
                    key="login"
                    initial={{
                        y:0,
                        opacity:1
                    }}
                    exit={{
                        y:500,
                        x:-200,
                        opacity:0,
                    }}
                    transition={{
                        duration:1,
                        type:"spring"
                    }}
                    className="w-full h-full flex justify-center items-center"
                    >
                    <XlLogin />
                    </motion.div>
                ) : (
                    <motion.div
                    key="createAccount"
                    initial={{
                        y:-300,
                        x:200,
                        opacity:0
                    }}
                    animate={{
                        y:0,
                        x:0,
                        opacity:1
                    }}
                    className="w-full h-full flex justify-center items-center"
                    >
                    <XlCreateAccount />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default XlCondition;
