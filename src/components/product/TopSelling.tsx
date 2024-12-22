"use client";

import Link from "next/link";
import Image from "next/image";
import TSproductOne from "@/assets/images/green-shirt.png";
import TSproductTwo from "@/assets/images/Half-tshirt.png";
import TSproductThree from "@/assets/images/short-jeans.png";
import TSproductFour from "@/assets/images/black-jeans.png";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";

import React, { useState } from "react";

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  const products = [
    {
      id: 1111111,
      images: TSproductOne,
      name: "Verticals Stripped Shirt",
      rating: "★★★★",
      score: "4.5/5",
      price: "$120",
      discountedPrice: null,
    },
    {
      id: 11111111,
      images: TSproductTwo,
      name: "Courage Graphic T-shirt ",
      rating: "★★★",
      score: "3.5/5",
      price: "$260",
      discountedPrice: "$240 -20%",
    },
    {
      id: 111111111,
      images: TSproductThree,
      name: "Loose Fit Bermuda Shorts",
      rating: "★★★★",
      score: "4.5/5",
      price: "$180",
      discountedPrice: null,
    },
    {
      id: 1111111111,
      images: TSproductFour,
      name: "Faded Skinny Jeans",
      rating: "★★★★",
      score: "4.5/5",
      price: "$160",
      discountedPrice: "$130 -30%",
    },
  ];

  interface ProductCardProps {
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    discount?: number;
  }
  

  return (
    <section className="max-w-screen-2xl container mx-auto px-4 py-8 mt-16">
      <h2
        className={cn(
          "text-3xl font-extrabold text-center mb-8",
          integralCF.className
        )}
      >
        TOP SEELING
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-300 ${
          showAll ? "max-h-full" : "max-h-[500px] overflow-hidden"
        }`}
      >
        {products.map((product2) => (
          <div key={product2.id} className="p-4">
            <Link href={`/product2/${product2.id}`}>
            <Image
              src={product2.images}
              alt={product2.name}
              className="w-full h-64 mb-4 rounded-xl object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{product2.name}</h3>
            </Link>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-xl">{product2.rating}</span>
              <span className="text-sm text-gray-500 ml-2">
                {product2.score}
              </span>
            </div>
            <p
              className={`text-xl font-bold text-gray-800 ${
                product2.discountedPrice ? "line-through" : ""
              }`}
            >
              {product2.price}
            </p>
            {product2.discountedPrice && (
              <p className="text-xl font-bold text-red-500">
                {product2.discountedPrice}
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

export default TopSelling;
