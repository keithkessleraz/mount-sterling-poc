"use client"

import { useState } from "react"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Building2, Home } from "lucide-react"

interface PropertiesSectionProps {
  onContactProperty: (propertyId: string) => void
}

export function PropertiesSection({ onContactProperty }: PropertiesSectionProps) {
  const [filter, setFilter] = useState<"all" | "commercial" | "residential">("all")

  const filteredProperties = properties.filter(p => {
    if (filter === "all") return true
    return p.type === filter
  })

  const commercialCount = properties.filter(p => p.type === "commercial").length
  const residentialCount = properties.filter(p => p.type === "residential").length

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Available Spaces
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from {properties.length} thoughtfully designed commercial and residential spaces
            in our beautifully restored historic buildings.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="gap-2"
          >
            All Spaces ({properties.length})
          </Button>
          <Button
            variant={filter === "commercial" ? "default" : "outline"}
            onClick={() => setFilter("commercial")}
            className="gap-2"
          >
            <Building2 className="h-4 w-4" />
            Commercial ({commercialCount})
          </Button>
          <Button
            variant={filter === "residential" ? "default" : "outline"}
            onClick={() => setFilter("residential")}
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            Residential ({residentialCount})
          </Button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              onContact={onContactProperty}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
