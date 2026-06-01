'use client'
import PostForm from "@/components/post-editor/PostForm";
import { Button } from "@/components/ui/button";



export default function NewPost(){


    return (
        <div
        className="bg-background mx-auto flex flex-col justify-center gap-2 max-w-6xl"
        >
            <div className="min-w-md">
            <h1 className="text-2xl">Novo Post</h1>

            <PostForm />

            <Button
            className="bg-muted-foreground p-1.5"
            >
                Guardar
            </Button>
            </div>
        </div>
    )
}