import Cookies from "js-cookie";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {

    let token: string | undefined;

    if (typeof window == 'undefined'){
        const {cookies: getNextCookies } = await import('next/headers');
        const cookieStore = await getNextCookies();
        token = cookieStore.get('token')?.value;
    }
    else{
        token = Cookies.get('token')
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type' : 'application/json',
            ...(token ? {Authorization: `Bearer ${token}`} : {}),
            ...options.headers,
        }
    })

    if (!response.ok){
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Erro na requisicao!')
    }

    return response.json();
}