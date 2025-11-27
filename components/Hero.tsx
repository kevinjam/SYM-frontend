"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles } from "lucide-react"
import { IPhoneMockup, IPhoneMockupDark } from "@/components/ui/iphone-mockup"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 min-h-screen flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute inset-0 bg-grid-teal-100 dark:bg-grid-navy-900 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                  SYM AI
                </span>
                <span className="block text-gray-900 dark:text-white mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Your Intelligent Health & Medication Companion
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto lg:mx-0">
                A smart, easy-to-use health companion designed to help you manage medication, 
                track symptoms, and monitor well-being using advanced AI.
              </p>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {[
                { icon: Shield, text: "HIPAA Compliant", color: "emerald" },
                { icon: Sparkles, text: "Smart Insights", color: "emerald" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm rounded-full border border-teal-200 dark:border-teal-800 shadow-sm"
                >
                  <badge.icon className={`h-4 w-4 text-${badge.color}-600 dark:text-${badge.color}-400`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://apps.apple.com/app/sym', '_blank')}
              >
                <svg 
                  className="mr-2 h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600 dark:text-gray-400 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span>FDA Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-navy-500 rounded-full animate-pulse"></div>
                <span>Secure & Private</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Device Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main iPhone Mockup */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {theme === 'dark' ? (
                  <IPhoneMockupDark
                    screenshot="/dashboard.png"
                    alt="SYM AI Dashboard - Your intelligent health companion showing medication tracking, symptom monitoring, and health insights"
                    size="lg"
                    className="relative z-10 drop-shadow-2xl"
                  />
                ) : (
                  <IPhoneMockup
                    screenshot="/dashboard.png"
                    alt="SYM AI Dashboard - Your intelligent health companion showing medication tracking, symptom monitoring, and health insights"
                    size="lg"
                    className="relative z-10 drop-shadow-2xl"
                  />
                )}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-700 dark:text-gray-300 font-medium bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Smart Health Dashboard
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-teal-400 dark:border-teal-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-teal-500 dark:bg-teal-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
