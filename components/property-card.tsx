import { Property } from "@/lib/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, MapPin, DollarSign, Maximize2, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  property: Property
  onContact: (propertyId: string) => void
}

export function PropertyCard({ property, onContact }: PropertyCardProps) {
  const icon = property.type === "commercial" ? <Building2 className="h-5 w-5" /> : <Home className="h-5 w-5" />

  const statusVariant =
    property.status === "available" ? "default" :
    property.status === "coming_soon" ? "secondary" :
    "outline"

  const statusLabel =
    property.status === "available" ? "Available Now" :
    property.status === "coming_soon" ? "Coming Soon" :
    "Leased"

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow overflow-hidden">
      {/* Property Image */}
      {property.image && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-200">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge variant={statusVariant} className="text-xs shadow-md">
              {statusLabel}
            </Badge>
          </div>
          <div className="absolute top-3 left-3">
            <Badge variant="outline" className="capitalize bg-white/90 backdrop-blur text-xs shadow-md">
              {property.type}
            </Badge>
          </div>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl">{property.name}</CardTitle>
        <CardDescription className="line-clamp-2">{property.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Maximize2 className="h-4 w-4 text-muted-foreground" />
            <span>{property.squareFeet.toLocaleString()} sq ft</span>
          </div>
          {property.monthlyRent > 0 && (
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold">${property.monthlyRent}/mo</span>
            </div>
          )}
          {property.bedrooms && (
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-muted-foreground" />
              <span>{property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Key Features:</p>
          <ul className="space-y-1">
            {property.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={() => onContact(property.id)}
          disabled={property.status === "leased"}
        >
          {property.status === "leased" ? "Not Available" : "Contact About This Space"}
        </Button>
      </CardFooter>
    </Card>
  )
}
