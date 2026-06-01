import { apiRequest } from "./api";

type LoginResponse = {
    access_token: string;
    user: {
        id: string;
        email: string;
        name: string;
    }
}

type User = {
    name: string;
    email: string;
    password: string;
}


export async function register(name: string, email: string, password: string){
    const user: User = await apiRequest('/auth/register',
        {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }
    );

    return user;
}

export async function login(
    email: string,
    password: string
){
    const data: LoginResponse = await apiRequest('/auth/login',
        {
            method: 'POST',
            body: JSON.stringify({email, password}),
        });

    localStorage.setItem('token', data.access_token);

    return data.user;
}

export function logout(){
    localStorage.removeItem('token');
}