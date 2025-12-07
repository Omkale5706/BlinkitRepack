"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Check, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { categories } from "@/lib/mock-data"

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    mrp: "",
    sellingPrice: "",
    expiryDate: "",
  })
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleImageUpload = () => {
    // Mock image upload
    setUploadedImages([
      ...uploadedImages,
      `/placeholder.svg?height=200&width=200&query=food product ${uploadedImages.length + 1}`,
    ])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="w-full max-w-md border-border text-center">
            <CardContent className="pt-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Item Listed Successfully!</h2>
              <p className="mt-2 text-muted-foreground">
                Your item is now listed on RePack. Buyers can now discover and purchase your product.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/dashboard">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View My Listings
                  </Button>
                </Link>
                <Link href="/listings">
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Marketplace
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Package className="h-6 w-6 text-primary" />
                Sell an Item
              </CardTitle>
              <CardDescription>
                List your unused sealed packaged food items. Only items with 30+ days until expiry are accepted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Lay's Classic Salted Chips"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your product..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label>Product Images *</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {uploadedImages.map((img, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg border border-border">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Upload ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    {uploadedImages.length < 4 && (
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary transition-colors hover:border-primary hover:bg-secondary/80"
                      >
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">Upload up to 4 images of your product</p>
                </div>

                {/* Pricing */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="mrp">MRP (₹) *</Label>
                    <Input
                      id="mrp"
                      type="number"
                      placeholder="Original price"
                      value={formData.mrp}
                      onChange={(e) => setFormData({ ...formData, mrp: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sellingPrice">Selling Price (₹) *</Label>
                    <Input
                      id="sellingPrice"
                      type="number"
                      placeholder="Your price"
                      value={formData.sellingPrice}
                      onChange={(e) => setFormData({ ...formData, sellingPrice: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Expiry Date */}
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Item must have at least 30 days until expiry</p>
                </div>

                {/* Seal Condition */}
                <div className="space-y-2">
                  <Label>Seal Condition *</Label>
                  <div className="flex items-center gap-3 rounded-lg border border-primary bg-primary/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <Check className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sealed Pack</p>
                      <p className="text-sm text-muted-foreground">Only factory-sealed items are accepted</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  List Item
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
