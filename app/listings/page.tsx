"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { mockProducts, categories } from "@/lib/mock-data"

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [expiryFilter, setExpiryFilter] = useState("all")

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory
      const matchesPrice = product.sellingPrice >= priceRange[0] && product.sellingPrice <= priceRange[1]

      let matchesExpiry = true
      if (expiryFilter === "30days") {
        const thirtyDaysFromNow = new Date()
        thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)
        matchesExpiry = new Date(product.expiryDate) <= thirtyDaysFromNow
      } else if (expiryFilter === "60days") {
        const sixtyDaysFromNow = new Date()
        sixtyDaysFromNow.setDate(sixtyDaysFromNow.getDate() + 60)
        matchesExpiry = new Date(product.expiryDate) <= sixtyDaysFromNow
      } else if (expiryFilter === "90days") {
        const ninetyDaysFromNow = new Date()
        ninetyDaysFromNow.setDate(ninetyDaysFromNow.getDate() + 90)
        matchesExpiry = new Date(product.expiryDate) <= ninetyDaysFromNow
      }

      return matchesSearch && matchesCategory && matchesPrice && matchesExpiry
    })
  }, [searchQuery, selectedCategory, priceRange, expiryFilter])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All Categories")
    setPriceRange([0, 500])
    setExpiryFilter("all")
  }

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "All Categories" ||
    priceRange[0] > 0 ||
    priceRange[1] < 500 ||
    expiryFilter !== "all"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Explore Listings</h1>
            <p className="mt-2 text-muted-foreground">Find great deals on sealed packaged food items</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Desktop Filters */}
              <div className="hidden items-center gap-4 lg:flex">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={expiryFilter} onValueChange={setExpiryFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Expiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Expiry Dates</SelectItem>
                    <SelectItem value="30days">Within 30 days</SelectItem>
                    <SelectItem value="60days">Within 60 days</SelectItem>
                    <SelectItem value="90days">Within 90 days</SelectItem>
                  </SelectContent>
                </Select>

                {hasActiveFilters && (
                  <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                    <X className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>

              {/* Mobile Filters */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden bg-transparent">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down your search</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Expiry</Label>
                      <Select value={expiryFilter} onValueChange={setExpiryFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Expiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Expiry Dates</SelectItem>
                          <SelectItem value="30days">Within 30 days</SelectItem>
                          <SelectItem value="60days">Within 60 days</SelectItem>
                          <SelectItem value="90days">Within 90 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Label>
                        Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                      </Label>
                      <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
                    </div>

                    {hasActiveFilters && (
                      <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Results Count */}
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
          </p>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="rounded-full bg-secondary p-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">No items found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your search or filters</p>
              <Button variant="outline" onClick={clearFilters} className="mt-4 bg-transparent">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
