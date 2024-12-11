"use client";

import Image from "next/image";
import ProductOne from "@/assets/images/Black-tshirt.png";
import ProductTwo from "@/assets/images/jeans.png";
import ProductThree from "@/assets/images/Red-blue-shirt.png";
import ProductFour from "@/assets/images/orange-tshirt.png";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";

import React, { useState } from "react";

const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  const products = [
    {
      id: 1,
      image: ProductOne,
      name: "T-shirt with Tape Details",
      rating: "⭐⭐⭐⭐",
      score: "4.5/5",
      price: "$120",
      discountedPrice: null,
    },
    {
      id: 2,
      image: ProductTwo,
      name: "Skinny Fit Jeans",
      rating: "⭐⭐",
      score: "3.5/5",
      price: "$260",
      discountedPrice: "$240 -20%",
    },
    {
      id: 3,
      image: ProductThree,
      name: "Checkered Shirt",
      rating: "⭐⭐⭐⭐",
      score: "4.5/5",
      price: "$180",
      discountedPrice: null,
    },
    {
      id: 4,
      image: ProductFour,
      name: "Sleeve Striped T-shirt",
      rating: "⭐⭐⭐⭐",
      score: "4.5/5",
      price: "$160",
      discountedPrice: "$130 -30%",
    },
  ];

  return (
    <section className="max-w-screen-2xl container mx-auto px-4 py-8 mt-16">
      <h2
        className={cn(
          "text-3xl font-extrabold text-center mb-8",
          integralCF.className
        )}
      >
        NEW ARRIVALS
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-300 ${
          showAll ? "max-h-full" : "max-h-[500px] overflow-hidden"
        }`}
      >
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-64 mb-4 rounded-xl object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">{product.rating}</span>
              <span className="text-sm text-gray-500 ml-2">
                {product.score}
              </span>
            </div>
            <p
              className={`text-xl font-bold text-gray-800 ${
                product.discountedPrice ? "line-through" : ""
              }`}
            >
              {product.price}
            </p>
            {product.discountedPrice && (
              <p className="text-xl font-bold text-red-500">
                {product.discountedPrice}
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
