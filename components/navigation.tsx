"use client"

import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold text-lg">Downtown Mount Sterling</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("properties")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Properties
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex"
        >
          Get in Touch
        </Button>

        <Button
          onClick={() => scrollToSection("contact")}
          size="sm"
          className="md:hidden"
        >
          Contact
        </Button>
      </div>
    </header>
  )
}
