import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Shield, Package } from "lucide-react"
import type { Product } from "@/lib/mock-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.mrp - product.sellingPrice) / product.mrp) * 100)

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          <Badge className="bg-green-600 text-white hover:bg-green-600">
            <Shield className="mr-1 h-3 w-3" />
            Expiry Verified
          </Badge>
          {discount > 0 && (
            <Badge className="bg-primary text-primary-foreground hover:bg-primary">{discount}% OFF</Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge variant="secondary" className="bg-card text-card-foreground">
            <Package className="mr-1 h-3 w-3" />
            Sealed
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-xs font-medium text-primary">{product.category}</p>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-card-foreground">{product.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-card-foreground">₹{product.sellingPrice}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Expires:{" "}
          {new Date(product.expiryDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/product/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full border-border hover:bg-secondary bg-transparent">
            View Item
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
