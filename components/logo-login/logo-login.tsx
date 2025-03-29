import { Cpu } from 'lucide-react'

export function LogoLogin() {
  return (
    <div className="w-full max-w-md mb-8 flex items-center justify-center">
      <a href="" className="flex items-center gap-2 self-center font-medium">
        <div className="flex h-6 w-6 items-center justify-center rounded-md text-white">
          <Cpu className="size-5 text-foreground" />
        </div>
        Viva Esportes
      </a>
    </div>
  )
}
