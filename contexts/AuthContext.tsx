'use client';

import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

import {
    login as LoginRequest,
    logout as LogoutRequest,
} from '@/lib/auth';

type User = {
    id: string;
    email?: string;
    name: string;
};

type AuthContextType = {
    user: User|null;
    login: (
        email: string,
        password: string
    ) => Promise<void>;
    logout: ()=>void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}:{children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null);

    async function login(email: string, password: string){
        const user = await LoginRequest(email, password);

        setUser(user);
    };

    function logout(){
        LogoutRequest();
        setUser(null);
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if (token){
            setUser({
                id: 'temp',
                email: "loaded@user.com",
                name: 'user'
            });
        }
    }, [])



    return (
        <AuthContext.Provider
        value={{
            user,
            login,
            logout,
        }}
        >
            {children}
        </ AuthContext.Provider>
    );
}


export function useAuth(){
    const context = useContext(AuthContext);

    if (!context){
        throw new Error('useAuth must be used inside AuthProvider!')
    }

    return context;
}