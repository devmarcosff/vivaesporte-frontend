"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      closeButton
      duration={1500}
      className="toaster group"
      toastOptions={{
        classNames: {
          // success: 'group toast group-[.toaster]:bg-esporte-green-default/80 group-[.toaster]:border group-[.toaster]:border-esporte-neutral-darker group-[.toaster]:text-white',
          // error: 'group toast group-[.toaster]:bg-esporte-red-default/80 group-[.toaster]:border group-[.toaster]:border-esporte-neutral-darker group-[.toaster]:text-white',
          success: 'group toast group-[.toaster]:bg-green-100 group-[.toaster]:border group-[.toaster]:border-green-800 group-[.toaster]:text-green-800',
          error: 'group toast group-[.toaster]:bg-red-100 group-[.toaster]:border group-[.toaster]:border-red-800 group-[.toaster]:text-red-800',
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          loading: "group toast group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toaster]:text-neutral-600",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
