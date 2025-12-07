"use client"

import { useState } from "react"
import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Shield, Package, Star, Truck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { mockProducts } from "@/lib/mock-data"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const product = mockProducts.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
            <Link href="/listings">
              <Button className="mt-4">Back to Listings</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const discount = Math.round(((product.mrp - product.sellingPrice) / product.mrp) * 100)

  const handleConfirmOrder = () => {
    setShowConfirmation(false)
    setOrderPlaced(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/listings"
            className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Listings
          </Link>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  <Badge className="bg-green-600 text-white hover:bg-green-600">
                    <Shield className="mr-1 h-3 w-3" />
                    Expiry Verified
                  </Badge>
                  {discount > 0 && (
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary">{discount}% OFF</Badge>
                  )}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-lg bg-secondary">
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={`${product.name} view ${i + 1}`}
                      className="h-full w-full object-cover opacity-70 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary">{product.category}</p>
                <h1 className="mt-2 text-3xl font-bold text-foreground">{product.name}</h1>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-foreground">₹{product.sellingPrice}</span>
                <span className="text-xl text-muted-foreground line-through">₹{product.mrp}</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Save ₹{product.mrp - product.sellingPrice}
                </Badge>
              </div>

              {/* Seller Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.sellerRating) ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Seller Rating: {product.sellerRating}/5</span>
              </div>

              {/* Product Details */}
              <Card className="border-border">
                <CardContent className="grid gap-4 p-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Expiry Date</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(product.expiryDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Seal Condition</p>
                      <p className="text-sm text-muted-foreground">{product.sealCondition} Pack</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-foreground">Description</h2>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
              </div>

              {/* Delivery Info */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Truck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Blinkit Delivery</p>
                    <p className="text-sm text-muted-foreground">We&apos;ll pick up from seller and deliver to you</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Button */}
              {orderPlaced ? (
                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <p className="font-semibold text-green-800">Order Request Submitted!</p>
                  <p className="text-sm text-green-600">We&apos;ll contact you shortly with delivery details.</p>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setShowConfirmation(true)}
                >
                  Request to Buy
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Order Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Your Order</DialogTitle>
            <DialogDescription>
              Blinkit will arrange pickup from the seller and deliver this item to you. This is a prototype
              demonstration.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div>
              <p className="font-medium text-foreground">{product.name}</p>
              <p className="text-lg font-bold text-primary">₹{product.sellingPrice}</p>
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
              Cancel
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
