
import { apiRequest } from "@/lib/api";
import {Project} from '@/lib/types'

export default async function Test(){
    
    const projects = await apiRequest('/projects')

    return(
        <main className="p-8">
           <h1 className="text-2xl font-bold mb-4"> Projectos </h1>
        {projects.map((project : Project) => (
           <ul 
           key={project.id}
           className='space-y-2'>
            
                <li 
                className="p-4 max-w-lg mx-auto bg-card border border-border rounded shadow-sm">
                    <h1 className='text-2xl font-mono'>{project.title}</h1>
                    <p className='text-sm text-muted-foreground'>{project.description}</p>
                </li>
            
            {projects.length===0 && <p>Nenhum Projecto encontrado.</p>}
           </ul>))}
        </main>
    )
}