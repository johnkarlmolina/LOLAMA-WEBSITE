import { CheckCircle, MapPin, ShoppingBag, Star } from 'lucide-react'
import type { FranchiseTier, MenuItem, ValuePoint } from '../types/best-lolama.types'

export const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Contact Us', href: '#contact' },
] as const

export const PARTNERS = ['SM', 'ROBINSONS', 'VISTA MALL', 'Filinvest Land, Inc.', 'JETTI GAS STATION'] as const

export const VALUE_POINTS: ValuePoint[] = [
  {
    title: 'Love & Passion',
    description: 'Every doughnut is made with care, consistency, and genuine pride in Filipino craftsmanship.',
    icon: Star,
  },
  {
    title: 'Affordability',
    description: 'Accessible product bundles and franchise options designed for real families and communities.',
    icon: ShoppingBag,
  },
  {
    title: 'Community Connection',
    description: 'Built for high-foot-traffic spaces where neighbors gather, share, and come back again.',
    icon: MapPin,
  },
  {
    title: 'Quality Ingredients',
    description: 'Freshly prepared doughnuts with rich fillings, premium toppings, and dependable supply standards.',
    icon: CheckCircle,
  },
]

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Starter Box',
    category: 'Starter Box',
    description: 'Features Strawberry Candy, Smores, Chocolate Oreo, Bavarian and more.',
    image: '/Images/STARTER BOX/STRAWBERRY CANDY.png',
    tag: 'Popular',
  },
  {
    id: 2,
    name: 'Premium Box',
    category: 'Premium Box',
    description: 'Dulce De Lechenuts, Quezo Duo, Biscoff Lotus, Tiramisu, Boston Cream.',
    image: '/Images/PREMIUM BOX/BOSTON CREAM.png',
    tag: 'Must Try',
  },
  {
    id: 3,
    name: 'Sari-Sari Box ni Lola',
    category: 'Sari-Sari Box',
    description: 'Ube Keso, Leche Flan ni Lola, Buko Pandan, Yema Twist.',
    image: '/Images/SARI-SARI BOX/LECHE FLAN NI LOLA.png',
    tag: 'Filipino Favorites',
  },
  {
    id: 4,
    name: 'Iced Caramel Macchiato',
    category: 'Beverages',
    description: 'Rich espresso with creamy milk and sweet caramel drizzle.',
    image: '/Images/PREMIUM BOX/CARAMEL MACHIATO.png',
    tag: 'Beverage',
  },
]

export const FRANCHISE_TIERS: FranchiseTier[] = [
  {
    title: 'Kiosk Unit Franchise',
    space: '8–15 sqm',
    capital: '₱680,000.00',
    roi: '~5–10 Months',
    features: ['Compact footprint', 'Ideal for malls and terminals', 'Fast customer turnover'],
  },
  {
    title: 'Store Unit Franchise',
    space: '35–60 sqm',
    capital: '₱2,050,700.00',
    roi: '~15–18 Months',
    featured: true,
    features: ['Full dine-in experience', 'Stronger brand visibility', 'Larger production capacity'],
  },
  {
    title: 'Store Area Franchise',
    space: 'Rights to 3 Outlets',
    capital: 'Exclusive territory rights',
    roi: 'Area protection and expansion potential',
    features: ['Exclusive territory coverage', 'Scalable rollout', 'Multi-site franchise strategy'],
  },
]

export const FRANCHISE_STEPS = [
  'Request Kit & Submit LOI',
  'Meeting & Evaluation',
  'MOA & Franchise Agreement',
  'Site Aquasation',
  'Location Inspection',
  'Feasibility Review',
  'Franchise Approval',
  'Site Design & Layout',
  'Permit and Documentation',
  'Construction / Fit-Out',
  'Equipment Installation',
  'Staff Training',
  'Soft Opening',
  'Grand Opening & Ongoing Support',
]
