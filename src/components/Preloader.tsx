import { useState, useEffect } from "react";
import logoImage from "@/assets/logo.png";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-all duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Logo Animation */}
      <div className="relative mb-8">
        <img 
          src={logoImage} 
          alt="Knewish360" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse"
        />
        
        {/* Rotating Ring */}
        <div className="absolute -inset-4 md:-inset-6">
          <svg className="w-full h-full animate-spin" style={{ animationDuration: "2s" }} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="60 240"
            />
          </svg>
        </div>
      </div>

      {/* Company Name */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Knewish<span className="text-primary">360</span>
      </h1>

      {/* Progress Bar */}
      <div className="w-48 md:w-64 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-200 ease-out rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-xs md:text-sm text-muted-foreground">
        {progress < 100 ? "Loading..." : "Welcome!"}
      </p>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
