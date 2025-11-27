"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sym Health Technologies, Inc. ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you use our Sym mobile application and related services (collectively, the "Service").
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Account information (name, email address, phone number)</li>
                  <li>Health data (symptoms, medications, vital signs, medical history)</li>
                  <li>Profile information (age, gender, medical conditions)</li>
                  <li>Communication preferences and settings</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information (device type, operating system, app version)</li>
                  <li>Log data (IP address, access times, error logs)</li>
                  <li>Analytics data to improve our services</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide and maintain the Sym health tracking services</li>
                <li>Generate personalized health insights and recommendations</li>
                <li>Send medication reminders and health notifications</li>
                <li>Improve our app functionality and user experience</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Comply with legal obligations and protect user safety</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">HIPAA Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sym is designed to be HIPAA compliant. We implement appropriate administrative, 
                physical, and technical safeguards to protect your health information. Your health 
                data is encrypted both in transit and at rest using industry-standard encryption methods.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal health information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>With your explicit consent</li>
                <li>With healthcare providers you authorize</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect the rights, property, or safety of Sym, our users, or others</li>
                <li>With service providers who assist in app functionality (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement robust security measures including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>End-to-end encryption for all health data</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for account access</li>
                <li>Employee training on data privacy and security</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access, update, or delete your personal information</li>
                <li>Export your health data in a portable format</li>
                <li>Opt-out of non-essential communications</li>
                <li>Request restriction of data processing</li>
                <li>File a complaint with relevant data protection authorities</li>
              </ul>
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg">
                <p className="text-sm text-teal-800 dark:text-teal-200 mb-2">
                  <strong>Take Control:</strong> Manage your privacy preferences and data directly from our Privacy Choices page.
                </p>
                <a 
                  href="/privacy-choices" 
                  className="inline-block text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Go to Privacy Choices →
                </a>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only as long as necessary to provide our services 
                and comply with legal obligations. Health data is retained for 7 years after account 
                deletion, as required by healthcare regulations. You may request earlier deletion of 
                your data, subject to legal requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sym is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and 
                believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">International Users</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are accessing Sym from outside the United States, please note that your 
                information may be transferred to, stored, and processed in the United States where 
                our servers are located and our central database is operated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                <p className="text-muted-foreground"><strong>Email:</strong> privacy@symhealth.com</p>
                <p className="text-muted-foreground"><strong>Address:</strong> Sym Health Technologies, Inc.<br />
                123 Health Street, Suite 100<br />
                San Francisco, CA 94105<br />
                United States</p>
                <p className="text-muted-foreground"><strong>Phone:</strong> +1 (208) 353-7695</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
