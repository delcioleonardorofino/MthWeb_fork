import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NewPostButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        className='bg-foreground border border-border text-background focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 font-mono'
        >
            <span className="text-lg text-muted-foreground">
                +
            </span>
            Novo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className='bg-background/80 backdrop-blur-2xl text-foreground'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Projecto
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Artigo
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
