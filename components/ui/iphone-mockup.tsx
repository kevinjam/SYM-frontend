import Image from "next/image"
import { cn } from "@/lib/utils"

interface IPhoneMockupProps {
  screenshot: string
  alt: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function IPhoneMockup({ screenshot, alt, className, size = "md" }: IPhoneMockupProps) {
  const sizeClasses = {
    sm: "w-48 h-96",
    md: "w-64 h-[32rem]",
    lg: "w-80 h-[40rem]"
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* iPhone Frame - Behind screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 256 512"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* iPhone Body */}
          <rect
            x="8"
            y="8"
            width="240"
            height="496"
            rx="48"
            ry="48"
            fill="url(#phoneGradient)"
            stroke="url(#phoneStroke)"
            strokeWidth="2"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="phoneStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Screenshot - On top, clipped to screen area */}
      <div className="absolute top-[6.25%] left-[7.8%] w-[84.4%] h-[87.5%] rounded-[20px] overflow-hidden bg-black z-10">
        <Image
          src={screenshot}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
          priority
          quality={95}
          unoptimized={false}
        />
      </div>
      
      {/* Dynamic Island and Home Indicator - On top of screenshot */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 256 512"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic Island */}
          <rect
            x="96"
            y="44"
            width="64"
            height="20"
            rx="10"
            ry="10"
            fill="#1a1a1a"
          />
          
          {/* Home Indicator */}
          <rect
            x="108"
            y="464"
            width="40"
            height="4"
            rx="2"
            ry="2"
            fill="#666666"
          />
        </svg>
      </div>
    </div>
  )
}

// Dark mode variant
export function IPhoneMockupDark({ screenshot, alt, className, size = "md" }: IPhoneMockupProps) {
  const sizeClasses = {
    sm: "w-48 h-96",
    md: "w-64 h-[32rem]",
    lg: "w-80 h-[40rem]"
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* iPhone Frame - Dark - Behind screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 256 512"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* iPhone Body - Dark */}
          <rect
            x="8"
            y="8"
            width="240"
            height="496"
            rx="48"
            ry="48"
            fill="url(#phoneDarkGradient)"
            stroke="url(#phoneDarkStroke)"
            strokeWidth="2"
          />
          
          {/* Dark Gradients */}
          <defs>
            <linearGradient id="phoneDarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="50%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="phoneDarkStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Screenshot - On top, clipped to screen area */}
      <div className="absolute top-[6.25%] left-[7.8%] w-[84.4%] h-[87.5%] rounded-[20px] overflow-hidden bg-black z-10">
        <Image
          src={screenshot}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
          priority
          quality={95}
          unoptimized={false}
        />
      </div>
      
      {/* Dynamic Island and Home Indicator - On top of screenshot */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 256 512"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic Island */}
          <rect
            x="96"
            y="44"
            width="64"
            height="20"
            rx="10"
            ry="10"
            fill="#1a1a1a"
          />
          
          {/* Home Indicator */}
          <rect
            x="108"
            y="464"
            width="40"
            height="4"
            rx="2"
            ry="2"
            fill="#666666"
          />
        </svg>
      </div>
    </div>
  )
}
