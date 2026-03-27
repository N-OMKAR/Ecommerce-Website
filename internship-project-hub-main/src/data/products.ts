import headphones from "@/assets/products/headphones.jpg";
import smartwatch from "@/assets/products/smartwatch.jpg";
import tshirt from "@/assets/products/tshirt.jpg";
import backpack from "@/assets/products/backpack.jpg";
import sneakers from "@/assets/products/sneakers.jpg";
import speaker from "@/assets/products/speaker.jpg";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "Electronics" | "Clothing" | "Accessories";
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Premium over-ear headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    image: headphones,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249.99,
    description: "Track fitness, receive notifications, and stay connected with this sleek smartwatch.",
    category: "Electronics",
    image: smartwatch,
  },
  {
    id: 3,
    name: "Classic Navy T-Shirt",
    price: 29.99,
    description: "Soft premium cotton crew-neck tee with a relaxed modern fit.",
    category: "Clothing",
    image: tshirt,
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 89.99,
    description: "Handcrafted genuine leather backpack with brass hardware and padded laptop sleeve.",
    category: "Accessories",
    image: backpack,
  },
  {
    id: 5,
    name: "Running Sneakers",
    price: 119.99,
    description: "Lightweight and breathable running shoes with responsive cushioning.",
    category: "Clothing",
    image: sneakers,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable speaker with deep bass, 12-hour battery, and waterproof design.",
    category: "Electronics",
    image: speaker,
  },
];
