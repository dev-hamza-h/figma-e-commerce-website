"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import { fetchNewArrivals, Product } from "@/utils/fetchProduct";

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchNewArrivals();
      setProducts(data);
    };
    getProducts();
  }, []);

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="max-w-screen-2xl container mx-auto px-4 py-8 mt-16">
      <h2 className={cn("text-3xl font-extrabold text-center mb-8", integralCF.className)}>NEW ARRIVALS</h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-300 ${
          showAll ? "max-h-full" : "max-h-[500px] overflow-hidden"
        }`}
      >
        {products.map((product) => (
          <div key={product._id} className="p-4">
                        
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
              
           </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={toggleView}
          className="px-6 py-2 font-semibold rounded-full border-2 bg-white hover:bg-black hover:text-white"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
