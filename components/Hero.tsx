"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { IPhoneMockup, IPhoneMockupDark } from "@/components/ui/iphone-mockup"
import { VideoModal, WatchDemoButton } from "@/components/ui/video-modal"
import { useTheme } from "next-themes"

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { theme } = useTheme()
  
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Sym
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Your Personal Health Companion
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                Take control of your health journey with intelligent symptom tracking, 
                medication management, and personalized health insights.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://apps.apple.com/app/sym', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
              <WatchDemoButton 
                onClick={() => setIsVideoOpen(true)}
                size="lg"
              />
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>FDA Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Secure & Private</span>
              </div>
            </div>
          </div>

          {/* Right content - iPhone Screenshots */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              {/* Primary iPhone - Dashboard */}
              <div className="relative group animate-fade-in transform hover:scale-105 transition-all duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {theme === 'dark' ? (
                  <IPhoneMockupDark 
                    screenshot="/dashboard.png" 
                    alt="Sym Health Dashboard" 
                    size="lg"
                    className="relative z-10 drop-shadow-2xl"
                  />
                ) : (
                  <IPhoneMockup 
                    screenshot="/dashboard.png" 
                    alt="Sym Health Dashboard" 
                    size="lg"
                    className="relative z-10 drop-shadow-2xl"
                  />
                )}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  Dashboard
                </div>
              </div>

              {/* Secondary iPhone - Medication Tracking */}
              <div className="relative group animate-fade-in transform hover:scale-105 transition-all duration-500 md:-ml-8 lg:-ml-12" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {theme === 'dark' ? (
                  <IPhoneMockupDark 
                    screenshot="/login.png" 
                    alt="Sym Health Medication Tracking" 
                    size="md"
                    className="relative z-10 drop-shadow-2xl md:mt-8"
                  />
                ) : (
                  <IPhoneMockup 
                    screenshot="/login.png" 
                    alt="Sym Health Medication Tracking" 
                    size="md"
                    className="relative z-10 drop-shadow-2xl md:mt-8"
                  />
                )}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 dark:text-gray-400 font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  Medications
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Video Modal */}
        <VideoModal 
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoId="dQw4w9WgXcQ"
          title="Sym Health App Demo"
        />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
