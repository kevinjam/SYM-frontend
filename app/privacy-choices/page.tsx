"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Download, 
  Trash2, 
  Eye, 
  Settings, 
  AlertTriangle, 
  CheckCircle2,
  Info,
  Database,
  Share2,
  Lock,
  FileText,
  Mail,
  Phone,
  MapPin,
  Activity,
  Camera,
  User,
  Smartphone
} from "lucide-react"

export default function PrivacyChoices() {
  const [preferences, setPreferences] = useState({
    healthDataCollection: true,
    analyticsData: false,
    locationData: false,
    photoData: true,
    thirdPartySharing: false,
    marketingEmails: false,
  })

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteEmail, setDeleteEmail] = useState("")
  const [isExporting, setIsExporting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [actionStatus, setActionStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''})

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
    // In a real app, this would save to backend
    setActionStatus({type: 'success', message: 'Preferences updated successfully'})
    setTimeout(() => setActionStatus({type: null, message: ''}), 3000)
  }

  const handleExportData = async () => {
    setIsExporting(true)
    setActionStatus({type: null, message: ''})
    
    // Simulate API call
    setTimeout(() => {
      setIsExporting(false)
      setActionStatus({type: 'success', message: 'Data export initiated. You will receive an email with your data within 24 hours.'})
      setTimeout(() => setActionStatus({type: null, message: ''}), 5000)
    }, 2000)
  }

  const handleDeleteRequest = async () => {
    if (!deleteEmail) {
      setActionStatus({type: 'error', message: 'Please enter your email address'})
      return
    }

    setIsDeleting(true)
    setActionStatus({type: null, message: ''})
    
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false)
      setShowDeleteConfirm(false)
      setDeleteEmail("")
      setActionStatus({type: 'success', message: 'Data deletion request submitted. You will receive a confirmation email shortly.'})
      setTimeout(() => setActionStatus({type: null, message: ''}), 5000)
    }, 2000)
  }

  const dataTypes = [
    {
      icon: User,
      title: "Contact Information",
      description: "Name, email address, phone number",
      collected: true,
      required: true,
      canDisable: false
    },
    {
      icon: Activity,
      title: "Health & Fitness Data",
      description: "Medications, symptoms, health reports, medical conditions",
      collected: true,
      required: true,
      canDisable: false,
      key: "healthDataCollection"
    },
    {
      icon: MapPin,
      title: "Location Data",
      description: "Precise location for finding nearby clinics",
      collected: true,
      required: false,
      canDisable: true,
      key: "locationData"
    },
    {
      icon: Camera,
      title: "Photos & Videos",
      description: "Prescription images, medication photos for AI scanning",
      collected: true,
      required: false,
      canDisable: true,
      key: "photoData"
    },
    {
      icon: Database,
      title: "Analytics Data",
      description: "App usage patterns, feature interactions, performance data",
      collected: false,
      required: false,
      canDisable: true,
      key: "analyticsData"
    },
    {
      icon: Smartphone,
      title: "Device Information",
      description: "Device ID, OS version, app version (for bug reports and notifications)",
      collected: true,
      required: true,
      canDisable: false
    }
  ]

  const thirdParties = [
    {
      name: "Firebase (Google)",
      purpose: "Authentication and push notifications",
      dataShared: "Email, name, FCM tokens",
      canDisable: false
    },
    {
      name: "OpenRouter / OpenAI",
      purpose: "AI-powered medication scanning",
      dataShared: "Prescription images (processed and deleted after analysis)",
      canDisable: true,
      key: "thirdPartySharing"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center">
            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
              <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Privacy Choices
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take control of your data. Manage what information we collect, how it's used, 
            and who it's shared with.
          </p>
        </div>

        {/* Status Message */}
        {actionStatus.type && (
          <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
            actionStatus.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            {actionStatus.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            )}
            <p className={`text-sm ${
              actionStatus.type === 'success' 
                ? 'text-green-800 dark:text-green-200' 
                : 'text-red-800 dark:text-red-200'
            }`}>
              {actionStatus.message}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Common privacy actions you can take right now
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-6 flex flex-col items-center space-y-2"
                  onClick={handleExportData}
                  disabled={isExporting}
                >
                  <Download className="h-6 w-6" />
                  <span className="font-semibold">Export My Data</span>
                  <span className="text-xs text-muted-foreground">
                    Download a copy of all your data
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-6 flex flex-col items-center space-y-2"
                  onClick={() => window.open('/privacy', '_blank')}
                >
                  <FileText className="h-6 w-6" />
                  <span className="font-semibold">View Privacy Policy</span>
                  <span className="text-xs text-muted-foreground">
                    Read our complete privacy policy
                  </span>
                </Button>
                <Button
                  variant="destructive"
                  className="h-auto py-6 flex flex-col items-center space-y-2"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  <Trash2 className="h-6 w-6" />
                  <span className="font-semibold">Delete My Account</span>
                  <span className="text-xs text-muted-foreground">
                    Permanently delete all your data
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Collection Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>What Data We Collect</span>
            </CardTitle>
            <CardDescription>
              Overview of all data types collected by our app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataTypes.map((dataType, index) => {
                const Icon = dataType.icon
                return (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{dataType.title}</h3>
                          {dataType.required && (
                            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                              Required
                            </span>
                          )}
                          {dataType.collected && !dataType.required && (
                            <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                              Optional
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {dataType.description}
                        </p>
                      </div>
                    </div>
                    {dataType.canDisable && dataType.key && (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePreferenceChange(dataType.key as keyof typeof preferences)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            preferences[dataType.key as keyof typeof preferences]
                              ? 'bg-teal-600'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[dataType.key as keyof typeof preferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Privacy Preferences */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Privacy Preferences</span>
            </CardTitle>
            <CardDescription>
              Control how your data is collected and used
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Health Data Collection</h3>
                    <p className="text-sm text-muted-foreground">
                      Required for core app functionality. This includes medications, symptoms, and health reports.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Required</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">Analytics Data</h3>
                      <button
                        onClick={() => handlePreferenceChange('analyticsData')}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          preferences.analyticsData
                            ? 'bg-teal-600'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            preferences.analyticsData
                              ? 'translate-x-5'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Help us improve the app by sharing anonymous usage data. This does not include personal health information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">Location Services</h3>
                      <button
                        onClick={() => handlePreferenceChange('locationData')}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          preferences.locationData
                            ? 'bg-teal-600'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            preferences.locationData
                              ? 'translate-x-5'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Allow location access to find nearby clinics and healthcare providers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">Marketing Communications</h3>
                      <button
                        onClick={() => handlePreferenceChange('marketingEmails')}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                          preferences.marketingEmails
                            ? 'bg-teal-600'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            preferences.marketingEmails
                              ? 'translate-x-5'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new features, health tips, and app updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Sharing */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Share2 className="h-5 w-5" />
              <span>Third-Party Data Sharing</span>
            </CardTitle>
            <CardDescription>
              Services we use that may receive your data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {thirdParties.map((party, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold">{party.name}</h3>
                        {!party.canDisable && (
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Purpose:</strong> {party.purpose}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Data Shared:</strong> {party.dataShared}
                      </p>
                    </div>
                    {party.canDisable && party.key && (
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange(party.key as keyof typeof preferences)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            preferences[party.key as keyof typeof preferences]
                              ? 'bg-teal-600'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[party.key as keyof typeof preferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold mb-1">Note:</p>
                  <p>
                    Some services (like Firebase for authentication) are required for the app to function. 
                    Disabling optional services may limit certain features. We never sell your data to third parties.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Rights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Your Data Rights</span>
            </CardTitle>
            <CardDescription>
              You have the right to control your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Right to Access</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  View all personal data we have collected about you.
                </p>
                <Button variant="outline" size="sm" onClick={handleExportData} disabled={isExporting}>
                  {isExporting ? 'Exporting...' : 'Request Data Export'}
                </Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Right to Portability</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Download your data in a machine-readable format.
                </p>
                <Button variant="outline" size="sm" onClick={handleExportData} disabled={isExporting}>
                  {isExporting ? 'Exporting...' : 'Download My Data'}
                </Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Right to Rectification</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Update or correct inaccurate information.
                </p>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/app/profile'}>
                  Update Profile
                </Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center space-x-2">
                  <Trash2 className="h-4 w-4" />
                  <span>Right to Deletion</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Request permanent deletion of your account and data.
                </p>
                <Button variant="destructive" size="sm" onClick={() => setShowDeleteConfirm(true)}>
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Data Retention Policy</span>
            </CardTitle>
            <CardDescription>
              How long we keep your data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Active Accounts</h3>
                <p className="text-sm text-muted-foreground">
                  We retain your data for as long as your account is active and for 7 years after account deletion, 
                  as required by healthcare regulations (HIPAA).
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Deleted Accounts</h3>
                <p className="text-sm text-muted-foreground">
                  After account deletion, most data is removed within 30 days. Health records are retained for 
                  7 years for legal compliance, then permanently deleted.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Backup Data</h3>
                <p className="text-sm text-muted-foreground">
                  Encrypted backups may retain data for up to 90 days after deletion for disaster recovery purposes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Need Help?</span>
            </CardTitle>
            <CardDescription>
              Have questions about your privacy? We're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:privacy@symhealth.com" className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
                    privacy@symhealth.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a href="tel:+12083537695" className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
                    +1 (208) 353-7695
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <h3 className="font-semibold">Mail Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Sym Health Technologies, Inc.<br />
                    123 Health Street, Suite 100<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                <span>Delete Account</span>
              </CardTitle>
              <CardDescription>
                This action cannot be undone. All your data will be permanently deleted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Warning:</strong> Deleting your account will permanently remove:
                </p>
                <ul className="text-sm text-red-800 dark:text-red-200 mt-2 list-disc list-inside space-y-1">
                  <li>All health data (medications, symptoms, reports)</li>
                  <li>Your profile and account information</li>
                  <li>All uploaded photos and documents</li>
                  <li>Your medication history and logs</li>
                </ul>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Enter your email to confirm:
                </label>
                <input
                  type="email"
                  value={deleteEmail}
                  onChange={(e) => setDeleteEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border rounded-md bg-background"
                />
              </div>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setShowDeleteConfirm(false)
                    setDeleteEmail("")
                  }}
                  disabled={isDeleting}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleDeleteRequest}
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Processing...' : 'Delete Account'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </main>
  )
}

