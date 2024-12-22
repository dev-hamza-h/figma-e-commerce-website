"use client";

import Image from "next/image";
 
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";  
import ProductOne from "@/assets/images/y-might-p1.png"
import ProductTwo from "@/assets/images/y-might-p2.png"
import ProductThree from "@/assets/images/y-might-p3.png"
import ProductFour from "@/assets/images/y-might-p4.png"

const YmightProduct = () => {
  const products = [
    {
      id: 7,
      image: ProductOne,
      name: "Polo with Contrast Trims",
      rating: "★★★★",
      score: "4.5/5",
      price: "$242",
      discountedPrice: "$212 -20%",
    },
    {
      id: 8,
      image: ProductTwo,
      name: "Gradient Graphic T-shirt",
      rating: "★★",
      score: "3.5/5",
      price: "$145",
      discountedPrice: null,
    },
    {
      id: 9,
      image: ProductThree,
      name: "Polo with Tipping Details",
      rating: "★★★★",
      score: "4.5/5",
      price: "$180",
      discountedPrice: null,
    },
    {
      id: 10,
      image: ProductFour,
      name: "Black Sripped T-shirt",
      rating: "★★★★",
      score: "5.0",
      price: "$150",
      discountedPrice: "$120 -30%",
    },
  ];

  return (
    <section className="max-w-screen-2xl container mx-auto px-4 py-8 ">
      <h2
        className={cn(
          "text-3xl font-extrabold text-center mb-8",
          integralCF.className
        )}
      >
        YOU MIGHT ALSO LIKE 
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <Link href={`/product/${product.id}`}>  {/* Linking to product details page */}
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-64 mb-4 rounded-xl object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            </Link>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-xl">{product.rating}</span>
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
    </section>
  );
};

export default YmightProduct;
