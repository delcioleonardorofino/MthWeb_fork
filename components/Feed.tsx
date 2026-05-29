
type Post = {
    id: string;
    title: string;
    description: string;
    content_json?: string;
}

export default async function Feed(){

    const response = await fetch('https://mthub-backend.onrender.com/projects');
    const posts: Post[] = await response.json();


    if (posts.length===0){
        return (
            <p className='pt-20'>Sem Projectos ainda!</p>
        )
    }
    return (
        <div className='mt-18'>
            {
                posts.map((post: Post)=>(
                    <div
                    key={post.id}>
                        <h2>{post?.title}</h2>
                        <p>{post?.description}</p>
                    </div>
                ))
            }
        </div>
    )
}