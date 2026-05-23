'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export function SessionProvid({ children } : {children: ReactNode}){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}