"use client";

import { useRef } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function PromotedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const promoted = products.filter((p) => p.promoted);

  if (promoted.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 bg-cream-light">
      <div className="text-center mb-8 px-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.5px] bg-charcoal text-white px-2 py-1 inline-block mb-3">
          Sponsored
        </span>
        <h2 className="text-[40px] font-normal text-charcoal mb-2">
          Featured Listings
        </h2>
        <p className="text-[12px] text-warm-gray">
          Hand-picked picks from our sellers
        </p>
      </div>

      <div className="relative px-4 md:px-8 lg:px-12">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-sm hidden md:flex items-center justify-center"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {promoted.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="min-w-[220px] max-w-[220px] flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-sm hidden md:flex items-center justify-center"
          aria-label="Scroll right"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
}
