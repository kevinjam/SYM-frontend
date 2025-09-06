"use client"

import { Button } from "@/components/ui/button"
import { Heart, Twitter, Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Sym</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed">
              Your personal health companion, designed to empower you on your wellness journey with intelligent tracking and insights.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Features</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">About</a></li>
              <li><a href="https://symhealth.com/pricing" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Pricing</a></li>
              <li><a href="https://symhealth.com/updates" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Updates</a></li>
              <li><a href="https://symhealth.com/beta" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Beta Program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://symhealth.com/help" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Help Center</a></li>
              <li><a href="https://symhealth.com/contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Contact Us</a></li>
              <li><a href="https://symhealth.com/community" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Community</a></li>
              <li><a href="https://symhealth.com/status" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">System Status</a></li>
              <li><a href="https://symhealth.com/feedback" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Feedback</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://symhealth.com/privacy" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Privacy Policy</a></li>
              <li><a href="https://symhealth.com/terms" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Terms of Service</a></li>
              <li><a href="https://symhealth.com/hipaa" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">HIPAA Compliance</a></li>
              <li><a href="https://symhealth.com/security" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Security</a></li>
              <li><a href="https://symhealth.com/cookies" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Get the latest health tips and Sym updates delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500 transition-colors duration-300"
              />
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-6 transition-all duration-300 hover:scale-105">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400 dark:text-gray-500">
            © {currentYear} Sym Health Technologies, Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400 dark:text-gray-500">
            <span>Made with ❤️ in the USA</span>
            <a href="https://symhealth.com" className="hover:text-white transition-all duration-300 hover:scale-105">
              symhealth.com
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex justify-center items-center space-x-8 opacity-60">
          <div className="text-xs text-gray-500 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>HIPAA Compliant</span>
          </div>
          <div className="text-xs text-gray-500 flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>SOC 2 Certified</span>
          </div>
          <div className="text-xs text-gray-500 flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>FDA Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
