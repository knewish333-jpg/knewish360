"use client"

export default function KnewishLogo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        className="transition-transform duration-300 hover:scale-110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orange segment (top-left) */}
        <path d="M 50 50 L 50 15 A 35 35 0 0 1 74.27 25.73 Z" fill="#F59E0B" />

        {/* Dark blue segment (bottom-left) */}
        <path d="M 50 50 L 25.73 74.27 A 35 35 0 0 1 50 15 L 50 50 Z" fill="#001F3F" />

        {/* Dark blue segment (bottom-right) */}
        <path d="M 50 50 L 74.27 25.73 A 35 35 0 0 1 85 85 L 50 50 Z" fill="#1a3a5c" />

        {/* Center circle */}
        <circle cx="50" cy="50" r="20" fill="white" />
      </svg>

      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-widest text-primary leading-none">KNEWISH</span>
        <span className="text-xs font-bold tracking-widest text-secondary">360°</span>
      </div>
    </div>
  )
}
