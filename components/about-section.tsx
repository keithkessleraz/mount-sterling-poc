import { Building, Users, Heart, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About the Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Bringing new life to Mount Sterling's historic downtown
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground text-center">
              We're transforming three historic buildings totaling 11,000 square feet in the
              heart of downtown Mount Sterling, Ohio. This project represents a commitment to
              preserving our community's architectural heritage while creating vibrant spaces
              for modern businesses and residents.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Historic Preservation</h3>
              <p className="text-sm text-muted-foreground">
                Carefully restored buildings maintaining original character
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Community Focus</h3>
              <p className="text-sm text-muted-foreground">
                Supporting local businesses and downtown revitalization
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Affordable Rents</h3>
              <p className="text-sm text-muted-foreground">
                Below-market pricing with owner support for success
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Modern Amenities</h3>
              <p className="text-sm text-muted-foreground">
                Updated utilities and conveniences throughout
              </p>
            </div>
          </div>

          {/* Location Benefits */}
          <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Why Mount Sterling?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-medium mb-2">Outdoor Recreation</p>
                <p className="text-muted-foreground">
                  Walking distance to Deer Creek State Park with boating, hiking, and camping
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">Employment Hub</p>
                <p className="text-muted-foreground">
                  Just 15 minutes from Honda and Anduril manufacturing plants
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">Small-Town Charm</p>
                <p className="text-muted-foreground">
                  Tight-knit community with rich history and local character
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
