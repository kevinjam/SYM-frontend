"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Smartphone, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
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
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
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

          {/* Right content - App Screenshots */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {/* Dashboard Screenshot */}
              <div className="relative group animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-64 h-80 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden relative">
                    {/* Mock Dashboard Content */}
                    <div className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Dashboard</h3>
                        <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                      </div>
                      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-4 text-white">
                        <p className="text-xs mb-1">Good morning, Kevin! 🎯</p>
                        <p className="text-lg font-bold">You're doing great!</p>
                        <div className="flex justify-between mt-3 text-xs">
                          <div className="text-center">
                            <div className="font-bold">3</div>
                            <div>Active</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold">2</div>
                            <div>Due</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold">5</div>
                            <div>Taken</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-purple-500 rounded"></div>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-800 dark:text-gray-200">Medications</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">0 Active prescriptions</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-800 dark:text-gray-200">Symptoms</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">19 Active symptoms</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium">Dashboard</div>
              </div>

              {/* Login Screenshot */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-64 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden relative">
                    {/* Mock Login Content */}
                    <div className="p-6 space-y-6 flex flex-col justify-center h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Welcome Back to SYM</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Sign in to continue your health journey</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-xs text-teal-600 dark:text-teal-400 mb-1">Email</div>
                          <div className="text-sm text-gray-800 dark:text-gray-200">domain277@gmail.com</div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-xs text-teal-600 dark:text-teal-400 mb-1">Password</div>
                          <div className="text-sm text-gray-400">••••••••••3</div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg font-medium text-sm">
                          Sign In
                        </button>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">or continue with</div>
                          <button className="flex items-center justify-center w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 py-2 rounded-lg text-sm">
                            <span className="text-gray-700 dark:text-gray-300">Continue with Google</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium">Login</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
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
