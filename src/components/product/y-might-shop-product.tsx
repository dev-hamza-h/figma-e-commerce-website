"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import { fetchYMightProducts, Product } from "@/utils/fetchProduct";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton"; // Shadcn Skeleton import

const Ymightproduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Loading state for products

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchYMightProducts();
      setProducts(data);
      setLoading(false); // Set loading to false after data is fetched
    };
    getProducts();
  }, []);

  return (
    <section className="max-w-screen-2xl container mx-auto px-4 py-8 mt-16 overflow-hidden">
      <h2 className={cn("text-3xl font-extrabold text-center mb-8", integralCF.className)}>
        YOU MIGHT ALSO LIKE
      </h2>
      
      {/* If loading, show skeleton loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-300">
        {loading ? (
          // Skeleton loader while loading data
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="p-4">
              <Skeleton className="w-full h-64 mb-4 rounded-xl bg-gray-300 animate-pulse" />
              <Skeleton className="w-3/4 h-6 mb-2 bg-gray-300 animate-pulse" />
              <Skeleton className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse" />
              <Skeleton className="w-1/2 h-6 bg-gray-300 animate-pulse" />
            </div>
          ))
        ) : (
          // Show products when data is loaded
          products.map((product) => (
            <div key={product._id} className="p-4 border-2 rounded-2xl">
              <Link href={`${product._id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 mb-4 rounded-xl object-cover"
                  width={300}
                  height={300}
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 text-xl">
                    {"★".repeat(Math.round(product.rating))}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.rating}/5
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </p>
                {product.discountPercent && (
                  <p className="text-lg font-bold text-red-500">
                    {product.discountPercent}% OFF
                  </p>
                )}
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Ymightproduct;
