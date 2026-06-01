

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiRequest(
    endpoint: string,
    options: RequestInit = {}
){
    let token: string | null = null;

    if (typeof window !== 'undefined'){
        token = localStorage.getItem('token');
    }
    
    const headers = {
        "Content-Type": "application/json",
        ...(token && {
            Authorization: `Bearer ${token}`,
        }),
        ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`,{
        ...options,
        headers,
    });

    if (!response.ok){
        throw new Error('API request failed!');
    }

    return response.json();
}