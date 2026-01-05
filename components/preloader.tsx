"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-muted/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>

          <div className="absolute inset-2 rounded-full border-2 border-muted/20"></div>
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse-soft"></div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="text-3xl font-heading font-bold text-foreground tracking-tight">
            Knewish<span className="text-primary">360</span>
          </div>
          <p className="text-muted-foreground text-sm font-medium">Premium Solutions</p>
        </div>
      </div>
    </div>
  )
}
