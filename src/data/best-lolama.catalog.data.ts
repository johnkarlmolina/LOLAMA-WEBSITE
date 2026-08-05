export interface CatalogMenuItem {
  id: number
  name: string
  category:
    | 'Starter Box'
    | 'Premium Box'
    | 'Sari-Sari Box'
    | 'Royal Box'
    | 'Classic Cheese'
    | 'Munkchin Bites'
    | 'Dubai Collection'
    | 'Drinks'
  description: string
  image: string
  tag?: string
}

export const MENU_CATEGORIES = [
  'All',
  'Starter Box',
  'Premium Box',
  'Sari-Sari Box',
  'Royal Box',
  'Classic Cheese',
  'Munkchin Bites',
  'Dubai Collection',
  'Drinks',
] as const

export const MENU_CATALOG_ITEMS: CatalogMenuItem[] = [
  {
    id: 1,
    name: 'Strawberry Candy',
    category: 'Starter Box',
    description: 'Colorful strawberry glaze with festive sprinkles.',
    image: '/Images/STARTER BOX/STRAWBERRY CANDY.png',
  },
  {
    id: 3,
    name: 'Rocky Road',
    category: 'Starter Box',
    description: 'Chocolate layers with a crunchy road-style finish.',
    image: '/Images/STARTER BOX/ROCKY ROAD.png',
  },
  {
    id: 2,
    name: 'Signature Glaze',
    category: 'Starter Box',
    description: 'Classic sweet glaze with a soft doughnut base.',
    image: '/Images/STARTER BOX/SIGNATURE GLAZE.jpg',
  },
  {
    id: 4,
    name: 'Chocolate Oreo',
    category: 'Starter Box',
    description: 'Chocolate glaze topped with crushed Oreo cookie crumbs.',
    image: '/Images/STARTER BOX/IMG_8183.jpeg',
  },
  {
    id: 5,
    name: 'Cinnamon Sand',
    category: 'Starter Box',
    description: 'Warm cinnamon sugar with a soft, powdery finish.',
    image: '/Images/STARTER BOX/CINNAMON SAND.png',
  },
  {
    id: 6,
    name: 'Bavarian',
    category: 'Starter Box',
    description: 'Cream-filled doughnut with a Bavarian-style center.',
    image: '/Images/STARTER BOX/BAVARIAN.png',
  },
  {
    id: 7,
    name: 'Boston Cream',
    category: 'Premium Box',
    description: 'Rich custard and chocolate topping for a premium bite.',
    image: '/Images/PREMIUM BOX/BOSTON CREAM.png',
  },
  {
    id: 9,
    name: 'Almond Roast',
    category: 'Premium Box',
    description: 'Nutty almond flavor with a roasted aroma.',
    image: '/Images/PREMIUM BOX/ALMOND ROAST.png',
  },
  {
    id: 8,
    name: 'Cappuccino',
    category: 'Premium Box',
    description: 'Coffee-inspired cream flavor with a bold finish.',
    image: '/Images/PREMIUM BOX/CAPUCCINO.png',
  },
  {
    id: 10,
    name: 'Caramel Machiato',
    category: 'Premium Box',
    description: 'Sweet caramel cream with a smooth premium profile.',
    image: '/Images/PREMIUM BOX/CARAMEL MACHIATO.png',
  },
  {
    id: 11,
    name: 'Tiramisu',
    category: 'Premium Box',
    description: 'Coffee and cream profile inspired by the classic dessert.',
    image: '/Images/PREMIUM BOX/TIRAMISU.png',
  },
  {
    id: 12,
    name: 'Dark Chocolate Almond',
    category: 'Premium Box',
    description: 'Dark chocolate glaze with almond accents.',
    image: '/Images/PREMIUM BOX/DARK CHOCOLATE ALMOND.png',
  },
  {
    id: 13,
    name: 'Leche Flan ni Lola',
    category: 'Sari-Sari Box',
    description: 'Custard-style flavor with nostalgic Filipino sweetness.',
    image: '/Images/SARI-SARI BOX/LECHE FLAN NI LOLA.png',
  },
  {
    id: 14,
    name: 'Mango Cream',
    category: 'Sari-Sari Box',
    description: 'Creamy mango flavor that feels bright and tropical.',
    image: '/Images/SARI-SARI BOX/MANGO CREAM.png',
  },
  {
    id: 15,
    name: 'Tropical Coconut',
    category: 'Sari-Sari Box',
    description: 'Light coconut profile with a tropical twist.',
    image: '/Images/SARI-SARI BOX/TROPICAL COCONUT.png',
  },
  {
    id: 16,
    name: 'Triple Cream Cheese',
    category: 'Sari-Sari Box',
    description: 'Cream cheese layers for a richer bite.',
    image: '/Images/SARI-SARI BOX/TRIPPLE CREAM CHEESE.png',
  },
  {
    id: 17,
    name: 'Ube Keso',
    category: 'Sari-Sari Box',
    description: 'Purple yam and cheese in one Filipino-inspired bite.',
    image: '/Images/SARI-SARI BOX/UBE KESO.png',
  },
  {
    id: 18,
    name: 'Yema',
    category: 'Sari-Sari Box',
    description: 'Classic yema sweetness with a creamy texture.',
    image: '/Images/SARI-SARI BOX/YEMA.png',
  },
  {
    id: 21,
    name: 'Biscoff Overload',
    category: 'Royal Box',
    description: 'Lotus-style caramel spice flavor packed into the topping.',
    image: '/Images/ROYAL BOX/BISCOFF OVERLOAD.png',
  },
  {
    id: 19,
    name: 'Smores de Leche',
    category: 'Royal Box',
    description: 'A royal take on s’mores with leche-style richness.',
    image: '/Images/ROYAL BOX/SMORES DE LECHE.png',
  },
  {
    id: 20,
    name: 'Cream Brulee',
    category: 'Royal Box',
    description: 'Torched custard-inspired sweetness with a premium feel.',
    image: '/Images/ROYAL BOX/CREAM BRULEE.png',
  },
  {
    id: 22,
    name: 'Tart Berry',
    category: 'Royal Box',
    description: 'Sweet berry topping balanced with a light tart finish.',
    image: '/Images/ROYAL BOX/TART BERRY.png',
  },
  {
    id: 23,
    name: 'Strawberry Dream',
    category: 'Royal Box',
    description: 'Strawberry cream profile with a dessert-style finish.',
    image: '/Images/ROYAL BOX/STRAWBERRY DREAM.png',
  },
  {
    id: 24,
    name: 'Uji Matcha',
    category: 'Royal Box',
    description: 'Earthy matcha-inspired glaze for a refined option.',
    image: '/Images/ROYAL BOX/UJI MATCHA.png',
  },
  {
    id: 25,
    name: 'Classic Cheese Original',
    category: 'Classic Cheese',
    description: 'Original cheese doughnut with a familiar crowd-pleasing profile.',
    image: '/Images/CLASSIC CHEESE/CLASSIC CHEESE ORIGINAL.png',
  },
  {
    id: 26,
    name: 'Classic Cheese Choco',
    category: 'Classic Cheese',
    description: 'Cheese doughnut topped with chocolate richness.',
    image: '/Images/CLASSIC CHEESE/CLASSIC CHEESE CHOCO.png',
  },
  {
    id: 27,
    name: 'Classic Cheese Ube',
    category: 'Classic Cheese',
    description: 'Cheese and ube flavor in one classic box favorite.',
    image: '/Images/CLASSIC CHEESE/CLASSIC CHEESE UBE.png',
  },
  {
    id: 29,
    name: 'Butternut',
    category: 'Munkchin Bites',
    description: 'Butternut-style bite-sized treats with a familiar flavor.',
    image: '/Images/MUNKCHIN BITES/butternut.png',
  },
  {
    id: 28,
    name: 'Choco Munch',
    category: 'Munkchin Bites',
    description: 'Chocolate munchkin bites for quick snacking.',
    image: '/Images/MUNKCHIN BITES/CHOCO MUNCH.png',
  },
  {
    id: 30,
    name: 'Bavarian Bites',
    category: 'Munkchin Bites',
    description: 'Mini Bavarian bites for sharing and bundling.',
    image: '/Images/MUNKCHIN BITES/BAVARIAN BITES.png',
  },
  {
    id: 31,
    name: 'Cinnamon Bites',
    category: 'Munkchin Bites',
    description: 'Warm cinnamon mini-bites with a sugary dusting.',
    image: '/Images/MUNKCHIN BITES/CINNAMON BITES.png',
  },
  {
    id: 32,
    name: 'Milky Powdery',
    category: 'Munkchin Bites',
    description: 'Light milk powder coating with a soft bite.',
    image: '/Images/MUNKCHIN BITES/MILKY POWDERY.png',
  },
  {
    id: 33,
    name: 'Ube Butternut',
    category: 'Munkchin Bites',
    description: 'Ube flavor mixed into bite-sized butternut pieces.',
    image: '/Images/MUNKCHIN BITES/UBE BUTTERNUT.png',
  },
  {
    id: 35,
    name: 'Pistacio Supreme',
    category: 'Dubai Collection',
    description: 'Pistachio-forward premium doughnut with a rich finish.',
    image: '/Images/DUBAI COLLECTION/PISTACIO SUPREME.png',
  },
  {
    id: 34,
    name: 'Dubai Choco Cream',
    category: 'Dubai Collection',
    description: 'Creamy chocolate with a luxury-inspired Dubai finish.',
    image: '/Images/DUBAI COLLECTION/DUBAI CHOCO CREAM.png',
  },
  {
    id: 36,
    name: 'Biscoff Latte',
    category: 'Drinks',
    description: 'Espresso and milk rounded out with Biscoff caramel spice.',
    image: '/Images/DRINKS/BISCOFF LATTE.png',
  },
  {
    id: 37,
    name: 'Cappuccino Latte',
    category: 'Drinks',
    description: 'Classic espresso and steamed milk with a light foam top.',
    image: '/Images/DRINKS/CAPPUCCINO LATTE.png',
  },
  {
    id: 38,
    name: 'Caramel Macchiato',
    category: 'Drinks',
    description: 'Espresso layered with vanilla milk and a caramel drizzle.',
    image: '/Images/DRINKS/CARAMEL MACCHIATO.png',
  },
  {
    id: 39,
    name: 'Coffee Blends',
    category: 'Drinks',
    description: 'House coffee blend brewed for a smooth, everyday cup.',
    image: '/Images/DRINKS/COFFEE BLENDS.png',
  },
  {
    id: 40,
    name: 'Matchanese',
    category: 'Drinks',
    description: 'Earthy matcha blended into a creamy, refreshing drink.',
    image: '/Images/DRINKS/MATCHANESE.png',
  },
  {
    id: 41,
    name: 'Signature Blend Chocolate',
    category: 'Drinks',
    description: 'Rich chocolate drink made with Best Lolama\'s signature blend.',
    image: '/Images/DRINKS/SIGNATURE BLEND CHOCOLATE.png',
  },
]
