"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { PropertiesSection } from "@/components/properties-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>()

  const handleContactProperty = (propertyId: string) => {
    setSelectedPropertyId(propertyId)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PropertiesSection onContactProperty={handleContactProperty} />
      <AboutSection />
      <ContactSection selectedPropertyId={selectedPropertyId} />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Downtown Mount Sterling Redevelopment. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-slate-400">
            Historic preservation meets modern living
          </p>
        </div>
      </footer>
    </main>
  )
}
