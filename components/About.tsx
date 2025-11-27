"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Sparkles, Shield } from "lucide-react"
import { IPhoneMockup, IPhoneMockupDark } from "@/components/ui/iphone-mockup"
import { useTheme } from "next-themes"

export default function About() {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      icon: Heart,
      title: "Personalized Support",
      description: "Tailored health insights based on your unique needs",
      color: "teal",
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "Connect with caregivers and healthcare providers",
      color: "emerald",
    },
    {
      icon: Sparkles,
      title: "AI Intelligence",
      description: "Advanced algorithms learn from your health patterns",
      color: "teal",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "HIPAA-compliant security protecting your data",
      color: "emerald",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-teal-100 dark:bg-grid-navy-900 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0.6))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left content - Text */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Your Health Companion,{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Always There
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Whether you're managing a chronic condition, caring for someone, or staying on top 
                of your wellness routine, <strong className="text-gray-900 dark:text-white">SYM AI provides personalized support</strong>.
              </p>
              <p>
                From medication reminders to intelligent health insights, the app works{" "}
                <strong className="text-gray-900 dark:text-white">symbiotically with you</strong> to keep you 
                informed, empowered, and on track.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Card className="border-2 border-teal-100 dark:border-teal-900 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 bg-gradient-to-br from-white to-teal-50/50 dark:from-navy-800 dark:to-navy-900/50">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`h-6 w-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right content - UI Preview */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main mockup */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-teal-500/20 to-emerald-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {theme === 'dark' ? (
                  <IPhoneMockupDark
                    screenshot="/login.png"
                    alt="SYM AI Health Tracking"
                    size="lg"
                    className="relative z-10 drop-shadow-2xl"
                  />
                ) : (
                  <IPhoneMockup
                    screenshot="/login.png"
                    alt="SYM AI Health Tracking"
                    size="lg"
                    className="relative z-10 drop-shadow-2xl"
                  />
                )}
              </motion.div>

              {/* Floating stats cards */}
              <motion.div
                className="absolute -left-8 top-1/4 bg-white dark:bg-navy-800 rounded-2xl p-4 shadow-xl border border-teal-100 dark:border-teal-900"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Adherence Rate</div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/4 bg-white dark:bg-navy-800 rounded-2xl p-4 shadow-xl border border-emerald-100 dark:border-emerald-900"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AI Support</div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
