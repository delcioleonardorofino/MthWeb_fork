import { motion } from 'framer-motion';
import {ReactNode} from 'react';
import {cn} from '@/lib/utils';

interface SlideInProps {
    children: ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
    once?: boolean;
}

export function SlideIn({children, className, direction='up', delay=0, duration=0.45, once=true}: SlideInProps) {
    const directions = {
        up: { y: 10 },
        down: { y: -10 },
        left: { x: 10 },
        right: { x: -10 },    
    }

    return (
        <motion.div
        initial={{
            opacity: 0,
            ...directions[direction]
        }}
        whileInView={{
            opacity:1, x:0, y:0
        }}
        transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1]
        }}
        viewport={{ once, amount: 0.2 }}

        className={cn('transition-all duration-300', className)}
        >
            {children}
        </motion.div>
    )
}