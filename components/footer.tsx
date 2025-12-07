import Link from "next/link"
import { Package, Leaf, Shield, Truck } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Blinkit <span className="text-primary">RePack</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Reduce food waste, save money. Buy and sell unused sealed packaged food items.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/listings" className="text-muted-foreground hover:text-foreground">
                  Explore Listings
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-muted-foreground hover:text-foreground">
                  Sell an Item
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Our Promise</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Leaf className="h-4 w-4 text-green-600" />
                Eco-Friendly
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-4 w-4 text-blue-600" />
                Quality Verified
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" />
                Fast Delivery
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Blinkit RePack. All rights reserved. This is a prototype demonstration.</p>
        </div>
      </div>
    </footer>
  )
}
