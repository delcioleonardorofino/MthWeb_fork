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
        className='bg-foreground border border-border text-background focus:border-none font-mono'
        >
            <span className="text-lg text-muted-foreground">
                +
            </span>
            Novo
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
