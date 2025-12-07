import Link from "next/link"
import { ArrowRight, Leaf, Package, Shield, ShoppingBag, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                  <Leaf className="h-4 w-4" />
                  Reduce Food Waste
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                  Blinkit RePack
                </h1>
                <p className="text-pretty text-lg text-primary-foreground/80 sm:text-xl">
                  Reduce Waste, Sell Sealed Packs. List your unused sealed packaged food items with more than 30 days
                  expiry. Buyers can purchase them at lower prices. Blinkit RePack reduces food waste and helps users
                  save money.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/listings">
                    <Button
                      size="lg"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Explore Listings
                    </Button>
                  </Link>
                  <Link href="/sell">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                    >
                      Sell an Item
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative mx-auto aspect-square w-full max-w-md">
                  <div className="absolute inset-0 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm" />
                  <div className="absolute inset-4 flex items-center justify-center rounded-2xl bg-card shadow-2xl">
                    <div className="text-center">
                      <Package className="mx-auto h-24 w-24 text-primary" />
                      <p className="mt-4 text-lg font-semibold text-foreground">Sealed Packs Only</p>
                      <p className="text-muted-foreground">Verified Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">Simple steps to reduce waste and save money</p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">List Your Items</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Upload sealed items with 30+ days expiry</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <Shield className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Verified Quality</h3>
                  <p className="mt-2 text-sm text-muted-foreground">All items are checked for seal integrity</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <ShoppingBag className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Browse & Buy</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Find great deals on quality products</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">Fast Delivery</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Blinkit arranges pickup and delivery</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div>
                <p className="text-4xl font-bold text-primary">5000+</p>
                <p className="mt-2 text-muted-foreground">Items Listed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">10,000+</p>
                <p className="mt-2 text-muted-foreground">Happy Users</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">2 Tons</p>
                <p className="mt-2 text-muted-foreground">Food Waste Prevented</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-foreground">
              <div className="px-6 py-12 sm:px-12 sm:py-16">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
                    Ready to make a difference?
                  </h2>
                  <p className="mt-4 text-lg text-background/70">
                    Join thousands of users who are reducing food waste while saving money.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/listings">
                      <Button
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                      >
                        Start Exploring
                      </Button>
                    </Link>
                    <Link href="/sell">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-background/30 bg-transparent text-background hover:bg-background/10 sm:w-auto"
                      >
                        Sell Your Items
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
