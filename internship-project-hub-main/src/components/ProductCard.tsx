import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [showDetails, setShowDetails] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-200 hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-sm bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-display text-base font-semibold text-foreground leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-1 flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          {showDetails ? "Hide" : "More"} Details
          {showDetails ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>

        {showDetails && (
          <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground animate-in fade-in slide-in-from-top-1">
            <p>✓ Free shipping on orders over $50</p>
            <p>✓ 30-day return policy</p>
            <p>✓ 1-year warranty included</p>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={`rounded-md px-4 py-2 text-xs font-semibold transition-all duration-200 active:scale-95 ${
              added
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            {added ? (
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" /> Added
              </span>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
