import { MapPin, Home, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Historic Downtown Redevelopment
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to Downtown
            <br />
            <span className="text-primary">Mount Sterling</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of historic charm and modern living.
            Three beautifully restored buildings offering unique commercial spaces
            and residential apartments in the heart of Mount Sterling, Ohio.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              <span>9 Premium Spaces</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Historic Downtown Location</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Below-Market Rents</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("properties")}
              className="text-base"
            >
              View Available Spaces
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-base"
            >
              Schedule a Tour
            </Button>
          </div>

          {/* Location Highlights */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-muted-foreground mb-4">Prime Location Benefits</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-medium mb-1">Deer Creek State Park</p>
                <p className="text-muted-foreground">Walking distance</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-medium mb-1">Honda/Anduril Plants</p>
                <p className="text-muted-foreground">15 minutes away</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-medium mb-1">Historic Theater</p>
                <p className="text-muted-foreground">Event space included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
