"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Smartphone, Star, Users, Shield, Award, Heart, Activity, Pill, Bell, FileText } from "lucide-react"

export default function Marketing() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Sym Health
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Your Personal Health Companion
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Take control of your health journey with intelligent symptom tracking, 
              medication management, and personalized health insights.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://apps.apple.com/app/sym', '_blank')}
            >
              <Download className="mr-3 h-5 w-5" />
              Download for iOS
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sym', '_blank')}
            >
              <Smartphone className="mr-3 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
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
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Health Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to track, manage, and improve your health in one comprehensive app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: "Symptom Tracking",
                description: "Log and monitor symptoms with intelligent pattern recognition.",
                color: "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400"
              },
              {
                icon: Pill,
                title: "Medication Management",
                description: "Smart reminders and drug interaction checks for all medications.",
                color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
              },
              {
                icon: FileText,
                title: "Health Reports",
                description: "Generate comprehensive reports to share with healthcare providers.",
                color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400"
              },
              {
                icon: Bell,
                title: "Smart Reminders",
                description: "Personalized notifications for medications and appointments.",
                color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the growing community of users taking control of their health
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-teal-600">50,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">1M+</div>
              <div className="text-muted-foreground">Symptoms Tracked</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">500+</div>
              <div className="text-muted-foreground">Healthcare Providers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">4.8★</div>
              <div className="text-muted-foreground">App Store Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sym Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Sym?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl mx-auto flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Healthcare Professional Approved</h3>
              <p className="text-muted-foreground">
                Developed in collaboration with doctors, nurses, and healthcare experts to ensure medical accuracy.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mx-auto flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">HIPAA Compliant & Secure</h3>
              <p className="text-muted-foreground">
                Your health data is protected with bank-level security, encryption, and strict privacy controls.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl mx-auto flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Award-Winning Design</h3>
              <p className="text-muted-foreground">
                Recognized for excellence in healthcare app design and user experience by industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 via-blue-700 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Download Sym today and start your journey to better health management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://apps.apple.com/app/sym', '_blank')}
            >
              <Download className="mr-3 h-5 w-5" />
              Download for iOS
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sym', '_blank')}
            >
              <Smartphone className="mr-3 h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-foreground">Sym Health Technologies</span>
            </div>
            <p className="text-muted-foreground">
              Based in San Francisco, California, Sym Health Technologies is dedicated to empowering 
              individuals to take control of their health through innovative technology and 
              evidence-based healthcare solutions.
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground pt-4">
              <span>🏥 Healthcare Focused</span>
              <span>🇺🇸 Made in USA</span>
              <span>🔒 Privacy First</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
