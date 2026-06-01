
import { Project } from "@/lib/types";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({project} : ProjectCardProps){

    return (
        <div
        className='flex flex-col gap-1 border-b border-border py-4 bg-card hover:bg-accent-foreground/10 rounded-lg cursor-pointer px-2'
        >
            <h2
            className="text-lg text-foreground "
            >
                {project.title}
            </h2>
            <p 
            className='text-sm text-foreground/80'
            >
                {project.description}
            </p>
        </div>
    )
    
}