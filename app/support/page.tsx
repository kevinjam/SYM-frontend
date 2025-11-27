"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  HelpCircle, 
  Bug, 
  Lightbulb,
  BookOpen,
  Shield,
  CheckCircle2,
  ArrowRight,
  Send,
  ExternalLink
} from "lucide-react"

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const supportCategories = [
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Get answers to common questions about using SYM AI",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "Technical Support",
      description: "Need help with app features or troubleshooting?",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bug,
      title: "Report a Bug",
      description: "Found an issue? Help us improve by reporting it",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Feature Request",
      description: "Have an idea? We'd love to hear from you",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password from the login screen by tapping 'Forgot Password' or by going to Settings > Account > Change Password in the app."
    },
    {
      question: "How do I sync my data across devices?",
      answer: "Your data automatically syncs when you're signed in. Make sure you're using the same account on all devices and have an active internet connection."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes! SYM AI uses end-to-end encryption and is HIPAA compliant. Your health data is encrypted both in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      question: "How do I add a medication reminder?",
      answer: "Go to Medications > Add Medication, enter the details, and set your reminder schedule. You can customize the time, frequency, and notification preferences."
    },
    {
      question: "Can I export my health data?",
      answer: "Yes! You can export your data at any time from Settings > Privacy > Export Data. Your data will be sent to your registered email address within 24 hours."
    },
    {
      question: "How do I contact my doctor through the app?",
      answer: "If your doctor is connected to your account, you can send messages through the Messages section. Otherwise, contact your healthcare provider directly."
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@symhealth.com",
      action: "mailto:support@symhealth.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (208) 353-7695",
      action: "tel:+12083537695",
      responseTime: "Mon-Fri, 9 AM - 6 PM PST"
    },
    {
      icon: MessageCircle,
      title: "In-App Support",
      description: "Contact us from the app",
      contact: "Settings > Support",
      action: null,
      responseTime: "Within 12 hours"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl">
              <HelpCircle className="h-12 w-12 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Support Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you get the most out of SYM AI. Find answers, get support, or contact our team.
          </p>
        </motion.div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-teal-200 dark:hover:border-teal-800"
                  onClick={() => setSelectedCategory(category.title)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">{method.contact}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {method.responseTime}
                        </p>
                      </div>
                      {method.action && (
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                        >
                          <a href={method.action}>
                            Contact Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Help Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Help Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>User Guide</CardTitle>
                <CardDescription>Learn how to use all features of SYM AI</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/guide">
                    View Guide
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Learn about our security measures and privacy practices</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/privacy">
                    View Privacy Policy
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Bug className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Report an Issue</CardTitle>
                <CardDescription>Found a bug or experiencing an issue? Let us know</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:bugs@symhealth.com?subject=Bug Report">
                    Report Bug
                    <Send className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Hours & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 border-teal-200 dark:border-teal-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-foreground">Email Support</p>
                <p className="text-muted-foreground">24/7 - We respond within 24 hours</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone Support</p>
                <p className="text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM PST</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">In-App Support</p>
                <p className="text-muted-foreground">24/7 - We respond within 12 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Office Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-foreground">Sym Health Technologies, Inc.</p>
                <p className="text-muted-foreground">
                  123 Health Street, Suite 100<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
              <div className="pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://maps.google.com/?q=123+Health+Street+San+Francisco+CA+94105" target="_blank" rel="noopener noreferrer">
                    Get Directions
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Form */}
        <Card className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Still Need Help?</CardTitle>
            <CardDescription className="text-teal-100">
              Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="flex-1 bg-white text-teal-600 hover:bg-gray-100"
                asChild
              >
                <a href="mailto:support@symhealth.com?subject=Support Request">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+12083537695">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">HIPAA Compliant</h3>
            <p className="text-sm text-muted-foreground">Your health data is protected with industry-leading security</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Secure & Encrypted</h3>
            <p className="text-sm text-muted-foreground">End-to-end encryption for all your sensitive health information</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">We're always here to help you with any questions or concerns</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

