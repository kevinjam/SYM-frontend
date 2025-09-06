"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Mail, Smartphone, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for newsletter signup - integrate with Mailchimp or similar
    console.log("Newsletter signup:", email)
    setIsSubscribed(true)
    setEmail("")
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-teal-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main CTA */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Join thousands of users who are already taking control of their health journey with Sym.
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
              onClick={() => window.open('https://apps.apple.com/app/sym', '_blank')}
            >
              <Download className="mr-3 h-5 w-5" />
              Download for iOS
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 min-w-[200px]"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sym', '_blank')}
            >
              <Smartphone className="mr-3 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          {/* Beta signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4">Join the Beta Program</h3>
            <p className="text-teal-100 mb-6">
              Get early access to new features and help shape the future of Sym.
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-teal-200 focus:bg-white/30 focus:border-white"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 font-semibold rounded-full transition-all duration-300"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>✓ Subscribed!</>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Join Beta
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-xs text-teal-200 mt-4">
              By signing up, you agree to receive updates about Sym. Unsubscribe anytime.
            </p>
          </div>

          {/* Additional info */}
          <div className="grid md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl">🆓</span>
              </div>
              <h4 className="text-lg font-semibold">Free to Start</h4>
              <p className="text-teal-100 text-sm">
                Basic features are completely free. Premium features available with subscription.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold">Instant Setup</h4>
              <p className="text-teal-100 text-sm">
                Get started in under 2 minutes. No complex setup or lengthy onboarding required.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="text-lg font-semibold">Cancel Anytime</h4>
              <p className="text-teal-100 text-sm">
                No long-term commitments. Cancel your subscription anytime with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
