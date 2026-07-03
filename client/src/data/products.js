import headphonesImg from '../assets/products/headphones.jpg';
import smartwatchImg from '../assets/products/watch.jpg';
import bluetoothSpeakerImg from '../assets/products/headphones.jpg';
import keyboardImg from '../assets/products/keyboard.jpg';
import laptopImg from '../assets/products/laptop.jpg';
import smartphoneImg from '../assets/products/smartphone.jpg';
import hoodieImg from '../assets/products/backpack.jpg';
import jacketImg from '../assets/products/backpack.jpg';
import runningshoesImg from '../assets/products/shoes.jpg';
import sneakersImg from '../assets/products/shoes.jpg';
import backpackImg from '../assets/products/backpack.jpg';
import mouseImg from '../assets/products/keyboard.jpg';
import lampImg from '../assets/products/laptop.jpg';
import chairImg from '../assets/products/laptop.jpg';
import powerbankImg from '../assets/products/smartphone.jpg';
import fitnessbandImg from '../assets/products/watch.jpg';

export const products = [
  // Electronics
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    image: headphonesImg,
    price: 7999,
    oldPrice: 9999,
    rating: 4.5,
    stock: 10,
    description: "Premium wireless headphones with immersive sound quality and long battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    image: smartwatchImg,
    price: 15999,
    oldPrice: 19999,
    rating: 4.8,
    stock: 5,
    description: "Modern smartwatch with health tracking, notifications and fitness monitoring."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Electronics",
    image: bluetoothSpeakerImg,
    price: 3999,
    oldPrice: 5499,
    rating: 4.2,
    stock: 15,
    description: "Portable Bluetooth speaker delivering powerful sound and deep bass."
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    image: laptopImg,
    price: 69999,
    oldPrice: 79999,
    rating: 4.9,
    stock: 3,
    description: "High-performance laptop suitable for work, study and entertainment."
  },
  {
    id: 5,
    name: "Smartphone",
    category: "Electronics",
    image: smartphoneImg,
    price: 49999,
    oldPrice: 59999,
    rating: 4.7,
    stock: 8,
    description: "Latest generation smartphone with stunning display and powerful processor."
  },

  // Fashion
  {
    id: 6,
    name: "Men's Hoodie",
    category: "Fashion",
    image: hoodieImg,
    price: 1999,
    oldPrice: 2999,
    rating: 4.3,
    stock: 20,
    description: "Comfortable cotton hoodie perfect for casual wear."
  },
  {
    id: 7,
    name: "Women's Jacket",
    category: "Fashion",
    image: jacketImg,
    price: 3499,
    oldPrice: 4999,
    rating: 4.6,
    stock: 12,
    description: "Stylish and warm jacket for all seasons."
  },

  // Shoes
  {
    id: 8,
    name: "Running Shoes",
    category: "Shoes",
    image: runningshoesImg,
    price: 4999,
    oldPrice: 6499,
    rating: 4.4,
    stock: 15,
    description: "Lightweight running shoes designed for maximum comfort."
  },
  {
    id: 9,
    name: "Casual Sneakers",
    category: "Shoes",
    image: sneakersImg,
    price: 2999,
    oldPrice: 3999,
    rating: 4.1,
    stock: 25,
    description: "Stylish everyday sneakers for casual outfits."
  },

  // Accessories
  {
    id: 10,
    name: "Mechanical Keyboard",
    category: "Accessories",
    image: keyboardImg,
    price: 8999,
    oldPrice: 10999,
    rating: 4.8,
    stock: 7,
    description: "RGB mechanical keyboard with tactile switches."
  },
  {
    id: 11,
    name: "Backpack",
    category: "Accessories",
    image: backpackImg,
    price: 2499,
    oldPrice: 3499,
    rating: 4.5,
    stock: 18,
    description: "Durable backpack with multiple storage compartments."
  },
  {
    id: 12,
    name: "Wireless Mouse",
    category: "Accessories",
    image: mouseImg,
    price: 1499,
    oldPrice: 1999,
    rating: 4.2,
    stock: 30,
    description: "Ergonomic wireless mouse with smooth tracking."
  },

  // Home & Living
  {
    id: 13,
    name: "Table Lamp",
    category: "Home & Living",
    image: lampImg,
    price: 1299,
    oldPrice: 1999,
    rating: 4.0,
    stock: 15,
    description: "Elegant table lamp for your bedroom or office."
  },
  {
    id: 14,
    name: "Office Chair",
    category: "Home & Living",
    image: chairImg,
    price: 9999,
    oldPrice: 14999,
    rating: 4.7,
    stock: 5,
    description: "Comfortable ergonomic office chair for long working hours."
  },

  // Gadgets
  {
    id: 15,
    name: "Power Bank",
    category: "Gadgets",
    image: powerbankImg,
    price: 2999,
    oldPrice: 3999,
    rating: 4.4,
    stock: 20,
    description: "10000mAh fast charging power bank."
  },
  {
    id: 16,
    name: "Smart Fitness Band",
    category: "Gadgets",
    image: fitnessbandImg,
    price: 2499,
    oldPrice: 3499,
    rating: 4.3,
    stock: 12,
    description: "Fitness band with heart-rate monitoring and sleep tracking."
  }
];