

export interface CreatePostPayload {
    title: string;
    description: string;
    type: 'project'|'article'|'question';
    area: string;
    content_json:string;
    tags: string[];
    status: 'draft'|'published'
}