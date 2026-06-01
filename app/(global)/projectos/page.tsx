import { apiRequest } from "@/lib/api";
import { Project } from "@/lib/types";
import ProjectCard from "@/components/ProjectCard";


export default async function ProjectsPage(){

    const projects: Project[] = await apiRequest('/projects');

    if (projects.length === 0 ){
        return(
            <h2 className='text-lg'>Nenhum projecto encontrado!</h2>
        )
    }

    return(
        <div className='flex flex-col gap-2 w-full border-b border-border px-4'>
            {
                projects.map((project)=>(
                    <ProjectCard
                    key={project.id}
                    project={project}
                    />
                ))
            }
        </div>
    )
}