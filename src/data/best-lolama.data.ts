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

export const ABOUT_US_PARAGRAPHS = [
  'Best Lolama – Handmade Love Doughnuts & Café was established in 2022 in the heart of Novaliches, Quezon City, with a simple mission: to serve premium-quality, handcrafted donuts that are delicious, affordable, and made with love.',
  'Our signature donuts are known for their soft, high-quality dough and perfectly balanced sweetness—never too sweet, just right. We proudly offer a wide variety of freshly made products, including our best-selling Classic Cheese, Glazed, and Ube donuts, along with Starter Donuts, Premium Donuts, and Special Donuts. To complement every bite, we also serve freshly brewed coffee, refreshing frappes, and flavorful milk teas.',
  'At Best Lolama, we continuously innovate by creating Filipino-inspired flavors that celebrate local taste and craftsmanship. We take pride in producing products that are proudly made in the Philippines and worthy of sharing with every Filipino family.',
  'Best Lolama has grown to 22 franchise branches across the Philippines, with two company-owned branches located in Novaliches Town Proper and Molino, Cavite. As demand for our brand continues to grow, we have expanded our franchise program to give aspiring entrepreneurs the opportunity to build a successful business with a trusted and fast-growing brand.',
  'Our goal is to bring Best Lolama to more communities through strategically located stores and innovative cart concepts, making our premium donuts more accessible to customers nationwide.',
  'Every donut we create reflects our commitment to quality, value, consistency, and heartfelt service. What started as a dream has become a growing family of passionate entrepreneurs and loyal customers who believe that great food is made with love.',
  'Best Lolama is more than just a donut shop—it’s a proudly Filipino brand dedicated to creating memorable moments, supporting local entrepreneurship, and spreading happiness one handcrafted donut at a time.',
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
    name: 'Biscoff Overload',
    category: 'Royal Box',
    description: 'Lotus-style caramel spice flavor packed into the topping.',
    image: '/Images/ROYAL BOX/BISCOFF OVERLOAD.png',
  },
  {
    id: 2,
    name: 'Classic Cheese Original',
    category: 'Classic Cheese',
    description: 'Original cheese doughnut with a familiar crowd-pleasing profile.',
    image: '/Images/CLASSIC CHEESE/CLASSIC CHEESE ORIGINAL.png',
  },
  {
    id: 3,
    name: 'Pistacio Supreme',
    category: 'Dubai Collection',
    description: 'Pistachio-forward premium doughnut with a rich finish.',
    image: '/Images/DUBAI COLLECTION/PISTACIO SUPREME.png',
  },
  {
    id: 4,
    name: 'Almond Roast',
    category: 'Premium Box',
    description: 'Nutty almond flavor with a roasted aroma.',
    image: '/Images/PREMIUM BOX/ALMOND ROAST.png',
  },
  {
    id: 5,
    name: 'Ube Keso',
    category: 'Sari-Sari Box',
    description: 'Purple yam and cheese in one Filipino-inspired bite.',
    image: '/Images/SARI-SARI BOX/UBE KESO.png',
  },
  {
    id: 6,
    name: 'Butternut',
    category: 'Munkchin Bites',
    description: 'Butternut-style bite-sized treats with a familiar flavor.',
    image: '/Images/MUNKCHIN BITES/butternut.png',
  },
  {
    id: 7,
    name: 'Leche Flan ni Lola',
    category: 'Sari-Sari Box',
    description: 'Custard-style flavor with nostalgic Filipino sweetness.',
    image: '/Images/SARI-SARI BOX/LECHE FLAN NI LOLA.png',
  },
  {
    id: 8,
    name: 'Ube Classic',
    category: 'Classic Cheese',
    description: 'Classic cheese doughnut with rich ube flavor in every bite.',
    image: '/Images/CLASSIC CHEESE/CLASSIC CHEESE UBE.png',
  },
  {
    id: 9,
    name: 'Biscoff Latte',
    category: 'Drinks',
    description: 'Espresso and milk rounded out with Biscoff caramel spice.',
    image: '/Images/DRINKS/BISCOFF LATTE.png',
  },
  {
    id: 10,
    name: 'Cappuccino Latte',
    category: 'Drinks',
    description: 'Classic espresso and steamed milk with a light foam top.',
    image: '/Images/DRINKS/CAPPUCCINO LATTE.png',
  },
  {
    id: 11,
    name: 'Caramel Macchiato',
    category: 'Drinks',
    description: 'Espresso layered with vanilla milk and a caramel drizzle.',
    image: '/Images/DRINKS/CARAMEL MACCHIATO.png',
  },
  {
    id: 12,
    name: 'Matchanese',
    category: 'Drinks',
    description: 'Earthy matcha blended into a creamy, refreshing drink.',
    image: '/Images/DRINKS/MATCHANESE.png',
  },
]

export const FRANCHISE_TIERS: FranchiseTier[] = [
  {
    title: 'Kiosk Unit Franchise',
    space: '8–15 sqm',
    capital: '₱680,000.00',
    roi: '~5–10 Months',
    franchisefee: '₱180,000',
    trainingopeningsupport: 'Opening Support',
    renewalat50offranchisefee: 'at 50% of Franchise Fee',
    fullcafesetupwithproduction: 'Cafe Set up with Production',
    systemstandard: 'System Standard ',
    features: ['Compact footprint', 'Ideal for malls and terminals', 'Fast customer turnover'],
  },
  {
    title: 'Store Unit Franchise',
    space: '40–60 sqm',
    capital: '₱2,050,700.00',
    roi: '~15–18 Months',
    franchisefee: '₱300,000',
    trainingopeningsupport: 'Opening Support',
    renewalat50offranchisefee: 'at 50% of Franchise Fee',
    fullcafesetupwithproduction: 'Cafe Set up with Production',
    systemstandard: 'System Standard',
    featured: true,
    features: ['Full dine-in experience', 'Stronger brand visibility', 'Larger production capacity'],
  },
  {
    title: 'Store Area Franchise',
    space: 'Rights to 3 Outlets',
    capital: 'Exclusive territory rights',
    roi: 'Area protection and expansion potential',
    franchisefee: '₱575,000',
    trainingopeningsupport: 'Opening Support',
    renewalat50offranchisefee: 'at 50% of Franchise Fee',
    fullcafesetupwithproduction: 'Cafe Set up with Production',
    systemstandard: 'System Standard',
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

export const FRANCHISE_REQUIREMENTS = [
  {
    title: 'Letter of Intent',
    description:
      'Submit a formal letter expressing your genuine interest in becoming a franchise owner. Include your business background, financial capacity, and reasons for choosing our brand.',
  },
  {
    title: 'Accomplished Confidential Form',
    description: 'Complete our comprehensive application form.',
  },
  {
    title: 'Target Location',
    description: 'Provide detailed information about your proposed location.',
  },
]
