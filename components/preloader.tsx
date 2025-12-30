"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="animate-spin" style={{ animationDuration: "3s" }}>
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Orange segment */}
              <path d="M 50 50 L 50 15 A 35 35 0 0 1 74.27 25.73 Z" fill="#F59E0B" />

              {/* Dark blue segment (left) */}
              <path d="M 50 50 L 25.73 74.27 A 35 35 0 0 1 50 15 L 50 50 Z" fill="#001F3F" />

              {/* Dark blue segment (right) */}
              <path d="M 50 50 L 74.27 25.73 A 35 35 0 0 1 85 85 L 50 50 Z" fill="#1a3a5c" />

              {/* Center circle */}
              <circle cx="50" cy="50" r="20" fill="white" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-foreground animate-pulse">Knewish 360</p>
          <div className="flex items-center justify-center gap-1 mt-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
