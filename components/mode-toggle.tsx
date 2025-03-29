"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-3 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Label htmlFor="airplane-mode">
              <Sun size={16} className="cursor-pointer" />
            </Label>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tema claro</p>
          </TooltipContent>
        </Tooltip>
        <Switch id="airplane-mode" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
        <Tooltip>
          <TooltipTrigger asChild>
            <Label htmlFor="airplane-mode">
              <Moon size={16} className="cursor-pointer" />
            </Label>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tema escuro</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}