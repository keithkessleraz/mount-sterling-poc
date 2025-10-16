export type PropertyType = "commercial" | "residential"
export type PropertyStatus = "available" | "coming_soon" | "leased"

export interface Property {
  id: string
  type: PropertyType
  name: string
  squareFeet: number
  monthlyRent: number
  description: string
  features: string[]
  status: PropertyStatus
  bedrooms?: number
  image?: string
}
