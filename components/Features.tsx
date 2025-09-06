"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Bell, FileText, Pill } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Symptom Tracking",
    description: "Log and monitor your symptoms with intelligent pattern recognition to help you and your healthcare provider understand your health trends.",
    color: "bg-red-50 text-red-600",
    borderColor: "border-red-200"
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Never miss a dose with smart reminders, drug interaction checks, and comprehensive medication history tracking.",
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    icon: FileText,
    title: "Health Reports & Summaries",
    description: "Generate comprehensive health reports and summaries to share with your healthcare team for better informed decisions.",
    color: "bg-green-50 text-green-600",
    borderColor: "border-green-200"
  },
  {
    icon: Bell,
    title: "Reminders & Notifications",
    description: "Stay on top of your health routine with personalized reminders for medications, appointments, and health check-ins.",
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Your Health
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sym combines cutting-edge technology with healthcare expertise to provide you with 
            comprehensive tools for managing your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${feature.borderColor} dark:border-gray-700 border-2 animate-fade-in bg-white dark:bg-gray-800`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI-Powered Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced machine learning algorithms analyze your health data to provide personalized insights and recommendations.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your health data is encrypted and stored securely. We never share your personal information without your consent.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto flex items-center justify-center">
              <span className="text-white font-bold text-xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cross-Platform</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access your health data seamlessly across all your devices with automatic synchronization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
