import {
  Award,
  CheckCircle,
  Heart,
  Lightbulb,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Smile,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import type { CoreValue, FranchiseTier, MenuItem, ValuePoint } from '../types/best-lolama.types'

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

export const VISION_TEXT =
  'To become the Philippines’ leading and most loved handcrafted doughnut brand, recognized for exceptional quality, innovation, and heartfelt service. We envision Best Lolama in communities across the nation and beyond, bringing families and friends together through products made with love and excellence. By empowering entrepreneurs through successful franchise partnerships, creating meaningful employment, and championing proudly Filipino craftsmanship, we aspire to build a lasting legacy of growth, opportunity, and shared success.'

export const MISSION_TEXT =
  'At Best Lolama Inc., our mission is to create premium handcrafted doughnuts made with love, passion, and uncompromising quality. We are committed to delivering delicious, affordable products that bring happiness to every Filipino family while celebrating local flavors and craftsmanship. Beyond serving great food, we strive to build opportunities that transform lives through meaningful employment and accessible franchise opportunities.'

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Love',
    description: 'Everything we create begins with love, put into every doughnut, interaction, and partnership.',
    icon: Heart,
  },
  {
    title: 'Quality',
    description: 'Quality ingredients and high standards behind every fresh, delicious product.',
    icon: CheckCircle,
  },
  {
    title: 'Integrity',
    description: 'Honesty, transparency, and accountability that earn lasting trust.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer Delight',
    description: 'Outstanding products and service that create memorable experiences.',
    icon: Smile,
  },
  {
    title: 'Innovation',
    description: 'Continuous improvement through creativity and exciting new flavors.',
    icon: Lightbulb,
  },
  {
    title: 'Teamwork',
    description: 'Collaboration and shared purpose as one Best Lolama family.',
    icon: Users,
  },
  {
    title: 'Empowerment',
    description: 'Opportunities for employees and franchise partners to grow and succeed.',
    icon: TrendingUp,
  },
  {
    title: 'Community',
    description: 'Supporting local communities and Filipino craftsmanship wherever we operate.',
    icon: MapPin,
  },
  {
    title: 'Excellence',
    description: 'Pursuing the best in quality, safety, service, and operations.',
    icon: Award,
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
  'Site Acquisition',
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
