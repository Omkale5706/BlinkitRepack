"use client"

import Link from "next/link"
import { Package, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Package className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Blinkit <span className="text-primary">RePack</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">
              Home
            </Button>
          </Link>
          <Link href="/listings">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">
              Explore
            </Button>
          </Link>
          <Link href="/sell">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">
              Sell Item
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">
              Dashboard
            </Button>
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/dashboard">
            <Button variant="outline" size="icon" className="border-border bg-transparent">
              <User className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/sell">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingBag className="mr-2 h-4 w-4" />
              List Item
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="flex flex-col p-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">
                Home
              </Button>
            </Link>
            <Link href="/listings" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">
                Explore Listings
              </Button>
            </Link>
            <Link href="/sell" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">
                Sell an Item
              </Button>
            </Link>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">
                My Dashboard
              </Button>
            </Link>
            <div className="mt-4 border-t border-border pt-4">
              <Link href="/sell" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  List Item
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
