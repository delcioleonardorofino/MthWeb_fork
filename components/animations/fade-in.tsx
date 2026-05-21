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

export function FadeIn({children, className, delay=0, duration=0.45, once=true}: FadeInProps) {
    return (
        <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration,
            delay,
            ease: 'easeOut',
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