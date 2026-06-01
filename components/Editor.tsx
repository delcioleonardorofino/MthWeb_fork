'use client'

import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { CreatePostPayload } from '@/types/post';
import PostToolbar from './post-editor/PostToolbar';

type Props = {
    setFormData: React.Dispatch<React.SetStateAction<CreatePostPayload>>;
}

export default function TipTapEditor({setFormData}:Props){
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Escreva a tua publicacao aqui...</p>',
        onUpdate({editor}){
            setFormData((prev) => ({
                ...prev,
                content: editor.getHTML
            }))
        }
    })


    return(
        <div
        className='border border-border rounded-lg bg-background text-foreground '
        >
            <PostToolbar editor={editor}/>
            <EditorContent
            editor={editor} />
        </div>
    )
}