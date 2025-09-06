"use client"

import { useState, useEffect } from "react"
import { X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
  title?: string
}

export function VideoModal({ isOpen, onClose, videoId, title = "Demo Video" }: VideoModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsLoaded(true)
    } else {
      document.body.style.overflow = 'unset'
      // Delay reset to allow exit animation
      setTimeout(() => setIsLoaded(false), 300)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen && !isLoaded) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "transition-all duration-300 ease-out",
        isOpen 
          ? "opacity-100 backdrop-blur-sm bg-black/80" 
          : "opacity-0 backdrop-blur-none bg-black/0 pointer-events-none"
      )}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className={cn(
          "relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl",
          "transition-all duration-300 ease-out",
          isOpen 
            ? "scale-100 opacity-100 translate-y-0" 
            : "scale-95 opacity-0 translate-y-4"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Video Title */}
        {title && (
          <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
            <h3 className="text-white font-medium text-sm">{title}</h3>
          </div>
        )}

        {/* YouTube Embed */}
        {isLoaded && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white text-sm">Loading video...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Watch Demo Button Component
interface WatchDemoButtonProps {
  onClick: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}

export function WatchDemoButton({ onClick, className, size = "md" }: WatchDemoButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <Button
      variant="outline"
      className={cn(
        "group relative overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-sm",
        "hover:bg-white/20 hover:border-white/30 text-white font-semibold rounded-full",
        "transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <div className="relative">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <Play className="h-4 w-4 ml-0.5 fill-current" />
          </div>
          {/* Pulse animation */}
          <div className="absolute inset-0 w-8 h-8 bg-white/20 rounded-full animate-ping group-hover:animate-none"></div>
        </div>
        <span>Watch Demo</span>
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
    </Button>
  )
}
