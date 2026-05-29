
export type User = {
    id: string,
    name: string,
    email?: string
}

export type Project = {
    id: string
    title: string
    description?: string
    content_json?: Record<string, unknown>
    created_by: string
    is_published: boolean
    published_at?: string 
    created_at?: string
    updated_at?: string
}