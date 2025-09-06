"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Sym HIPAA compliant and secure?",
    answer: "Yes, Sym is fully HIPAA compliant and uses bank-level encryption to protect your health data. We never share your personal information without your explicit consent, and all data is stored securely in certified data centers."
  },
  {
    question: "How much does Sym cost?",
    answer: "Sym offers a free tier with basic symptom tracking and medication reminders. Our premium subscription ($9.99/month or $99/year) includes advanced analytics, unlimited health reports, and priority support. You can cancel anytime."
  },
  {
    question: "Can I share my health data with my doctor?",
    answer: "Absolutely! Sym generates comprehensive health reports that you can easily share with your healthcare providers. These reports include symptom patterns, medication adherence, and other valuable insights to support your medical consultations."
  },
  {
    question: "What devices and platforms does Sym support?",
    answer: "Sym is available on iOS and Android devices, with automatic synchronization across all your devices. We also offer a web dashboard for viewing detailed reports and managing your health data from your computer."
  },
  {
    question: "How does the medication reminder system work?",
    answer: "Sym sends personalized push notifications based on your medication schedule. You can set custom reminder times, track adherence, and receive alerts for potential drug interactions. The system adapts to your routine and preferences."
  },
  {
    question: "Can I track symptoms for family members?",
    answer: "Yes, Sym supports family accounts where you can manage health tracking for multiple family members, including children and elderly relatives. Each profile maintains separate, secure health data with appropriate privacy controls."
  },
  {
    question: "What happens to my data if I stop using Sym?",
    answer: "You maintain full control of your data. You can export all your health information at any time, and if you decide to delete your account, all your data will be permanently removed from our servers within 30 days."
  },
  {
    question: "Does Sym integrate with other health apps or devices?",
    answer: "Sym integrates with popular health platforms like Apple Health, Google Fit, and various wearable devices. This allows for automatic import of activity data, heart rate, and other health metrics to provide a comprehensive health picture."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Sym and your health data
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-6 border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact support */}
          <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of Sym.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://symhealth.com/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="https://symhealth.com/help"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
