"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun 
        className={cn(
          "h-[1.2rem] w-[1.2rem] transition-all",
          theme === "light" ? "scale-0 -rotate-90" : "scale-100 rotate-0"
        )} 
      />
      <Moon 
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all",
          theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        )} 
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}