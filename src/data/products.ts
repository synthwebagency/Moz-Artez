export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export const PRODUCTS: Product[] = [
  // Gates
  {
    id: 'gate-1',
    name: 'Artisan Iron Gate',
    category: 'Gates',
    description: 'Hand-crafted iron gate with intricate geometric patterns.',
    price: 45000,
    image: '/images/artisan-iron-gate.jpg',
  },
  {
    id: 'gate-2',
    name: 'Modern Steel Entrance',
    category: 'Gates',
    description: 'Minimalist steel gate with a brushed finish.',
    price: 38000,
    image: '/images/modern-steel-entrance.jpg',
  },
  // Tables
  {
    id: 'table-1',
    name: 'Recycled Wood Dining Table',
    category: 'Tables',
    description: 'Solid wood table made from reclaimed timber.',
    price: 17000,
    image: '/images/recycled-wood-dining-table.jpg',
  },
  {
    id: 'table-2',
    name: 'Stone & Metal Coffee Table',
    category: 'Tables',
    description: 'Elegant combination of polished stone and recycled metal.',
    price: 15000,
    image: '/images/stone-metal-coffee-table.jpg',
  },
  // Rocks
  {
    id: 'rock-1',
    name: 'Customized Art Designed Rocks',
    category: 'Rocks',
    description: 'Beautifully hand-carved and painted rocks for garden or home decor.',
    price: 8000,
    image: '/images/custom-art-rock-1.jpg',
  },
  {
    id: 'rock-2',
    name: 'Customized Art Designed Rocks',
    category: 'Rocks',
    description: 'Unique stone art piece featuring traditional Mozambican patterns.',
    price: 8000,
    image: '/images/custom-art-rock-2.jpg',
  },
  {
    id: 'rock-3',
    name: 'Customized Art Designed Rocks',
    category: 'Rocks',
    description: 'Artistic rock sculpture blending natural form with creative vision.',
    price: 8000,
    image: '/images/custom-art-rock-3.jpg',
  },
  // Shelves
  {
    id: 'shelf-1',
    name: 'Artistic Shelf',
    category: 'Shelves',
    description: 'Sturdy metal and wood shelving unit with a creative touch.',
    price: 12000,
    image: '/images/artistic-shelf-1.jpg',
  },
  {
    id: 'shelf-2',
    name: 'Artistic Shelf',
    category: 'Shelves',
    description: 'Elegant wall-mounted shelf made from recycled materials.',
    price: 12000,
    image: '/images/artistic-shelf-2.jpg',
  },
  {
    id: 'shelf-3',
    name: 'Artistic Shelf',
    category: 'Shelves',
    description: 'Unique industrial-style shelving for modern homes.',
    price: 12000,
    image: '/images/artistic-shelf-3.jpg',
  },
  // Chairs
  {
    id: 'chair-1',
    name: 'Eco-Friendly Lounge Chair',
    category: 'Chairs',
    description: 'Comfortable chair made from sustainable materials.',
    price: 18000,
    image: '/images/eco-lounge-chair.jpg',
  },
  // Decorations
  {
    id: 'deco-1',
    name: 'House Decoration',
    category: 'Decorations',
    description: 'Abstract wall decoration made from recycled scraps.',
    price: 5500,
    image: '/images/house-decoration-1.jpg',
  },
  {
    id: 'deco-2',
    name: 'House Decoration',
    category: 'Decorations',
    description: 'Hand-crafted metal ornament for interior styling.',
    price: 5500,
    image: '/images/house-decoration-2.jpg',
  },
  {
    id: 'deco-3',
    name: 'House Decoration',
    category: 'Decorations',
    description: 'Artistic recycled piece to enhance your home ambiance.',
    price: 5500,
    image: '/images/house-decoration-3.jpg',
  },
  {
    id: 'deco-4',
    name: 'House Decoration',
    category: 'Decorations',
    description: 'Unique sustainable decoration for a modern living space.',
    price: 5500,
    image: '/images/house-decoration-4.jpg',
  },
];

export const CATEGORIES = ['Gates', 'Tables', 'Rocks', 'Shelves', 'Chairs', 'Decorations'];
