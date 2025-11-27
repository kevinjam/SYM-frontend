"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pill,
  Activity,
  Brain,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Pill,
      title: "Smart Medication Management",
      description: "Set reminders, log intake, and stay organized with intelligent scheduling that adapts to your routine.",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-emerald-50",
      darkBgGradient: "from-teal-950/20 to-emerald-950/20",
    },
    {
      icon: Activity,
      title: "Health Monitoring Made Simple",
      description: "Track symptoms, vitals, and progress with clean, comprehensive reports that help you understand your health patterns.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-950/20 to-teal-950/20",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Receive personalized recommendations and alerts based on your health patterns, powered by advanced machine learning.",
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50 to-emerald-50",
      darkBgGradient: "from-teal-950/20 to-emerald-950/20",
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your health data is protected with HIPAA-ready security, end-to-end encryption, and strict privacy controls.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-950/20 to-teal-950/20",
    },
    {
      icon: Users,
      title: "Support for Patients & Caregivers",
      description: "Enable seamless coordination between individuals and caregivers, with shared access and real-time updates.",
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50 to-emerald-50",
      darkBgGradient: "from-teal-950/20 to-emerald-950/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-teal-50/50 via-white to-emerald-50/50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-teal-100 dark:bg-grid-navy-900 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0.6))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Better Health
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to take control of your health journey
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-2 border-teal-100 dark:border-teal-900 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 bg-gradient-to-br from-white via-white to-teal-50/30 dark:from-navy-800 dark:via-navy-800 dark:to-teal-950/30 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} dark:bg-gradient-to-br ${feature.darkBgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <motion.div
                      className="mt-6 flex items-center text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </CardContent>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-transparent dark:from-teal-900/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ready to experience these features?{" "}
            <a
              href="#cta"
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline inline-flex items-center"
            >
              Download SYM AI
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
