export interface Product {
  id: string
  name: string
  description: string
  category: string
  mrp: number
  sellingPrice: number
  expiryDate: string
  images: string[]
  sealCondition: "Sealed"
  sellerRating: number
  status: "Listed" | "Sold" | "Pending"
  createdAt: string
}

export interface Purchase {
  id: string
  productId: string
  productName: string
  productImage: string
  price: number
  status: "Pending Pickup" | "Delivered"
  orderedAt: string
}

export const categories = [
  "All Categories",
  "Snacks & Chips",
  "Beverages",
  "Dairy Products",
  "Breakfast & Cereals",
  "Biscuits & Cookies",
  "Instant Food",
  "Health & Nutrition",
  "Chocolates & Sweets",
]

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Lay's Classic Salted Chips",
    description:
      "Crispy and delicious classic salted potato chips. Perfect for snacking anytime. Unopened and factory sealed.",
    category: "Snacks & Chips",
    mrp: 40,
    sellingPrice: 28,
    expiryDate: "2025-03-15",
    images: ["/lays-potato-chips-bag-yellow.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.5,
    status: "Listed",
    createdAt: "2024-12-01",
  },
  {
    id: "2",
    name: "Tropicana Orange Juice 1L",
    description: "100% pure orange juice with no added sugar. Rich in Vitamin C. Factory sealed pack.",
    category: "Beverages",
    mrp: 120,
    sellingPrice: 85,
    expiryDate: "2025-02-28",
    images: ["/tropicana-orange-juice-carton.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.8,
    status: "Listed",
    createdAt: "2024-12-02",
  },
  {
    id: "3",
    name: "Kellogg's Corn Flakes 500g",
    description: "Start your morning with the golden crunch of Kellogg's Corn Flakes. High in iron and vitamins.",
    category: "Breakfast & Cereals",
    mrp: 195,
    sellingPrice: 140,
    expiryDate: "2025-04-20",
    images: ["/kelloggs-corn-flakes-box.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.7,
    status: "Listed",
    createdAt: "2024-12-03",
  },
  {
    id: "4",
    name: "Britannia Good Day Cookies",
    description: "Buttery cashew cookies that make every day a good day. Family pack with multiple servings.",
    category: "Biscuits & Cookies",
    mrp: 85,
    sellingPrice: 60,
    expiryDate: "2025-05-10",
    images: ["/britannia-good-day-cookies-pack.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.3,
    status: "Listed",
    createdAt: "2024-12-04",
  },
  {
    id: "5",
    name: "Maggi 2-Minute Noodles Pack of 8",
    description: "India's favorite instant noodles. Quick and easy meal in just 2 minutes. Multi-pack offer.",
    category: "Instant Food",
    mrp: 120,
    sellingPrice: 90,
    expiryDate: "2025-06-15",
    images: ["/maggi-noodles-multipack.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.9,
    status: "Listed",
    createdAt: "2024-12-05",
  },
  {
    id: "6",
    name: "Amul Dark Chocolate 150g",
    description: "Rich and intense dark chocolate with 55% cocoa. Premium quality Belgian style chocolate.",
    category: "Chocolates & Sweets",
    mrp: 180,
    sellingPrice: 130,
    expiryDate: "2025-03-30",
    images: ["/amul-dark-chocolate-bar.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.6,
    status: "Listed",
    createdAt: "2024-12-06",
  },
  {
    id: "7",
    name: "Protein Bar Variety Pack",
    description: "Assorted protein bars for fitness enthusiasts. Contains 6 bars with different flavors.",
    category: "Health & Nutrition",
    mrp: 450,
    sellingPrice: 320,
    expiryDate: "2025-04-25",
    images: ["/protein-bars-variety-pack.png"],
    sealCondition: "Sealed",
    sellerRating: 4.4,
    status: "Listed",
    createdAt: "2024-12-07",
  },
  {
    id: "8",
    name: "Amul Butter 500g",
    description: "Fresh and creamy butter made from pure milk. Perfect for cooking and spreading on toast.",
    category: "Dairy Products",
    mrp: 280,
    sellingPrice: 220,
    expiryDate: "2025-02-15",
    images: ["/amul-butter-pack-yellow.jpg"],
    sealCondition: "Sealed",
    sellerRating: 4.8,
    status: "Listed",
    createdAt: "2024-12-08",
  },
]

export const mockUserListings: Product[] = [
  {
    ...mockProducts[0],
    status: "Listed",
  },
  {
    ...mockProducts[1],
    id: "user-1",
    status: "Sold",
  },
  {
    ...mockProducts[3],
    id: "user-2",
    status: "Pending",
  },
]

export const mockPurchases: Purchase[] = [
  {
    id: "p1",
    productId: "2",
    productName: "Tropicana Orange Juice 1L",
    productImage: "/tropicana-orange-juice.jpg",
    price: 85,
    status: "Pending Pickup",
    orderedAt: "2024-12-05",
  },
  {
    id: "p2",
    productId: "5",
    productName: "Maggi 2-Minute Noodles Pack of 8",
    productImage: "/maggi-noodles.jpg",
    price: 90,
    status: "Delivered",
    orderedAt: "2024-12-02",
  },
]
