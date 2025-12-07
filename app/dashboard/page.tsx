"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Package, ShoppingBag, Edit, Trash2, Clock, CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { mockUserListings, mockPurchases } from "@/lib/mock-data"

export default function DashboardPage() {
  const [listings, setListings] = useState(mockUserListings)
  const [purchases] = useState(mockPurchases)

  const handleDelete = (id: string) => {
    setListings(listings.filter((item) => item.id !== id))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Listed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Listed</Badge>
      case "Sold":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Sold</Badge>
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "Pending Pickup":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Pending Pickup</Badge>
      case "Delivered":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Listed":
        return <Package className="h-4 w-4 text-green-600" />
      case "Sold":
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "Pending Pickup":
        return <Truck className="h-4 w-4 text-orange-600" />
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">My Dashboard</h1>
            <p className="mt-2 text-muted-foreground">Manage your listings and track your purchases</p>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <Card className="border-border">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{listings.length}</p>
                  <p className="text-sm text-muted-foreground">Total Listings</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {listings.filter((l) => l.status === "Sold").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Items Sold</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{purchases.length}</p>
                  <p className="text-sm text-muted-foreground">Purchases</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="listings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="listings" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                My Listings
              </TabsTrigger>
              <TabsTrigger value="purchases" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                My Purchases
              </TabsTrigger>
            </TabsList>

            {/* Listings Tab */}
            <TabsContent value="listings" className="space-y-4">
              {listings.length > 0 ? (
                listings.map((item) => (
                  <Card key={item.id} className="border-border">
                    <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.images[0] || "/placeholder.svg"}
                          alt={item.name}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(item.status)}
                            {getStatusBadge(item.status)}
                          </div>
                          <h3 className="mt-1 font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="font-bold text-foreground">₹{item.sellingPrice}</span>
                            <span className="text-sm text-muted-foreground line-through">₹{item.mrp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:ml-auto">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-destructive hover:text-destructive bg-transparent"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Listing</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this listing? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(item.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="border-border">
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <Package className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">No listings yet</h3>
                    <p className="mt-2 text-muted-foreground">Start selling by listing your first item</p>
                    <Link href="/sell">
                      <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                        List an Item
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Purchases Tab */}
            <TabsContent value="purchases" className="space-y-4">
              {purchases.length > 0 ? (
                purchases.map((purchase) => (
                  <Card key={purchase.id} className="border-border">
                    <CardContent className="flex items-center gap-4 p-4">
                      <img
                        src={purchase.productImage || "/placeholder.svg"}
                        alt={purchase.productName}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(purchase.status)}
                          {getStatusBadge(purchase.status)}
                        </div>
                        <h3 className="mt-1 font-semibold text-foreground">{purchase.productName}</h3>
                        <p className="text-sm text-muted-foreground">
                          Ordered on{" "}
                          {new Date(purchase.orderedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                        <p className="mt-1 font-bold text-foreground">₹{purchase.price}</p>
                      </div>
                      <Link href={`/product/${purchase.productId}`}>
                        <Button variant="outline" size="sm">
                          View Item
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="border-border">
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">No purchases yet</h3>
                    <p className="mt-2 text-muted-foreground">Explore listings and make your first purchase</p>
                    <Link href="/listings">
                      <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                        Browse Listings
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
