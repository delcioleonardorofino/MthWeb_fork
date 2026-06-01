'use client'

import TipTapEditor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreatePostPayload } from "@/types/post";

export default function PostForm(){
    const [formData, setFormData] = useState<CreatePostPayload>({
        title: '',
        description: '',
        type: 'project',
        area: '',
        content_json: '',
        tags: [],
        status: 'draft'
    });

    const [tagInput, setTagInput] = useState('');

    return(
        <div className="flex flex-col w-full  p-4 gap-3 justify-between">
            <div
            className="flex gap-3 justify-between">
            <select
            value={formData.type}
            className="bg-background p-2 border border-border rounded-lg"
            onChange={event => setFormData({
                ...formData,
                type: event.target.value as 'project'|'article'|'question'
            })}
            >
                <option value="">Selecione</option>
                <option value="project">Projecto</option>
                <option value="article">Artigo</option>
                <option value="question">Questao</option>
            </select>

            <select
            value={formData.area}
            className="bg-background p-2 border border-border rounded-lg"
            onChange={event => setFormData({
                ...formData,
                area: event.target.value
            })}
            >
                <option value="">Area</option>
                <option value="civil">Civil</option>
                <option value="environmental">Ambiental/Ambiental</option>
                <option value="electrical">Electrica</option>
                <option value="electronics">Electronica</option>
                <option value="software">Informatica</option>
                <option value="mechanics">Mecanica</option>
            </select>
            </div>

            <input
            value={formData.title} 
            type="text" 
            className="rounded-xl p-1.5 border border-border"
            onChange={(event) => {
                setFormData({
                    ...formData,
                    title: event.target.value
                })
            }}
            />

            <input
            value={tagInput}
            onChange={(e) => {
                setTagInput(e.target.value)}}
            placeholder="Digite uma tag"

            className="border border-border rounded-lg p-1.5"
            />

            <Button
            onClick={()=>{
                setFormData({
                    ...formData,
                    tags: [...formData.tags, tagInput]
                });

                setTagInput('')
            }}
            >
                Adicionar Tag
            </Button>

            <div className="flex gap-2">
            
            {formData.tags.map((tag, i) => (
            <div
            key={i}
            className="flex gap-1 bg-muted px-2 rounded-lg"
            >
            <span
            className="">{tag}</span>

            <button
            className="bg-muted-background text-muted-foreground"
            onClick={()=>{
                setFormData((prev) => ({
                    ...prev,
                    tags: prev.tags.filter(t => t !== tag)
                }));
            }}
            >
                x
            </button>
            
            
            </div>
        ))}
            </div>

            

            <textarea
            value={formData.description} 
            name="" 
            id=""
            className="rounded-xl p-4 border border-border"
            placeholder="Escreva aqui..."
            onChange={(event) => {
                setFormData({
                    ...formData,
                    description: event.target.value
                })
            }}
            >
            </textarea>

            <div>
                <TipTapEditor setFormData={setFormData} />
            </div>
        </div>
    )
}