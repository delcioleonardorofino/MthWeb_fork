'use server'

import Image from 'next/image'


type User = {
    id: string;
    name: string;
    email?: string;
    avatar_url?: string;
    is_verified?: boolean;
    updated_at?: string;
    is_active: boolean;
    created_at: string;
}

export default async function Users(){

    const response = await fetch('https://mthub-backend.onrender.com/users');
    const users: User[] = await response.json();

    if(users.length ===0){
        return <p className='pt-20'>No users Found!</p>
    }

    return (
        <div className='pt-20'>
            {
                users.map((user)=>(
                    <div
                    key={user.id}
                    className='bg-card p-4 rounded-lg border-b border-border mx-auto'
                    >
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>

                        {user.avatar_url && 
                        <Image
                        alt='User image'
                        src={user.avatar_url}
                        width={32}
                        height={32} />
                        }
                    </div>
            ))}
        </div>
    )
}