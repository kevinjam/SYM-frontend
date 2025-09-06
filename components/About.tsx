"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Empowering Your Health Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sym is designed for individuals who want to take an active role in managing their health. 
                Whether you're dealing with chronic conditions, managing multiple medications, or simply 
                want to maintain better health awareness, Sym provides the tools you need.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Built by healthcare professionals and technology experts, Sym bridges the gap between 
                patients and providers, ensuring you have the information and insights needed to make 
                informed decisions about your health.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.8★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right content - Trust indicators */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Sym?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Healthcare Professional Approved</h4>
                    <p className="text-gray-600 dark:text-gray-300">Developed in collaboration with doctors, nurses, and healthcare experts.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">HIPAA Compliant & Secure</h4>
                    <p className="text-gray-600 dark:text-gray-300">Your health data is protected with bank-level security and encryption.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Award-Winning Design</h4>
                    <p className="text-gray-600 dark:text-gray-300">Recognized for excellence in healthcare app design and user experience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial preview */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-blue-100 text-sm">Chronic condition patient</div>
                </div>
              </div>
              <p className="text-lg italic">
                "Sym has completely transformed how I manage my health. The medication reminders 
                and symptom tracking have helped me and my doctor make better treatment decisions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
