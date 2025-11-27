"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-50 to-white dark:from-navy-950 dark:to-navy-900 border-t border-gray-200 dark:border-navy-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              SYM AI
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center space-x-6 text-sm">
            <motion.a
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="https://symhealth.com/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="/support"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              Support
            </motion.a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Sym Health Technologies, Inc.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
