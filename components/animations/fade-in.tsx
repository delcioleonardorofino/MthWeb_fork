"use client"

import {motion} from "framer-motion";
import {ReactNode} from 'react';
import {cn} from '@/lib/utils';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    duration?: number;
    once?: boolean;
}

export function FadeIn({children, className, delay, y, duration, once}: FadeInProps) {
    return (
        <motion.div
        initial={{
            opacity: 0,
            y:30,
            filter: 'blur(10px)',
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
        }}
        transition={{
            duration:0.6,
            delay,
            ease: 'easeInOut',
        }}
        viewport={{
            once : true,
            amount: 0.2
        }}
        className={cn(className)}
        >
            {children}
        </motion.div>
    );
}