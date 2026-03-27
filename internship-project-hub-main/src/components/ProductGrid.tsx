import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const categories = ["All", "Electronics", "Clothing", "Accessories"] as const;

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Our Products
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Browse our curated collection
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-md border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
