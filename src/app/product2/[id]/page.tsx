"use client";

import YmightProduct from "@/components/product/y-might-shop-product";
import { useState } from "react";
import Image from "next/image";
import ProductOne from "@/assets/images/Black-tshirt.png";
import ProductTwo from "@/assets/images/jeans.png";
import ProductThree from "@/assets/images/Red-blue-shirt.png";
import ProductFour from "@/assets/images/orange-tshirt.png";
import GraphicPossImg from "@/assets/images/graphic-poss-boy-t-shirt.png";
import GraphicImg from "@/assets/images/graphic-t-shirt.webp";
import TSproductOne from "@/assets/images/green-shirt.png";
import TSproductTwo from "@/assets/images/Half-tshirt.png";
import TSproductThree from "@/assets/images/short-jeans.png";
import TSproductFour from "@/assets/images/black-jeans.png";
import ReviewPage from "@/components/reviewcard/page";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Product Data
const products = [
  {
    id: 111,
    images: [ProductOne, GraphicImg, GraphicPossImg],
    name: "T-shirt with Tape Details",
    rating: "★★★★",
    price: "$120",
    discountedPrice: null,
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#31344F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 1111,
    images: [ProductTwo, GraphicImg, GraphicPossImg],
    name: "Skinny Fit Jeans",
    rating: "★★★",
    price: "$260",
    discountedPrice: "$240 -20%",
    description:
      "A trendy Jeans with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#1A237E"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 11111,
    images: [ProductThree, GraphicImg, GraphicPossImg],
    name: "Checkered Shirt",
    rating: "★★★★",
    price: "$180",
    discountedPrice: null,
    description:
      "A trendy shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FF0000"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 111111,
    images: [ProductFour, GraphicImg, GraphicPossImg],
    name: "Sleeve Striped T-shirt",
    rating: "★★★★",
    price: "$160",
    discountedPrice: "$130 -30%",
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 1111111,
    images: [TSproductOne, GraphicImg, GraphicPossImg],
    name: "Verticals Stripped Shirt",
    rating: "★★★★",
    price: "$120",
    discountedPrice: null,
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 11111111,
    images: [TSproductTwo, GraphicImg, GraphicPossImg],
    name: "Courage Graphic T-shirt ",
    rating: "★★★",
    price: "$260",
    discountedPrice: "$240 -20%",
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 111111111,
    images: [TSproductThree, GraphicImg, GraphicPossImg],
    name: "Loose Fit Bermuda Shorts",
    rating: "★★★★",
    price: "$180",
    discountedPrice: null,
    description:
      "A trendy Bermuda Shorts with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "XLarge"],
  },
  {
    id: 1111111111,
    images: [TSproductFour, GraphicImg, GraphicPossImg],
    name: "Faded Skinny Jeans",
    rating: "★★★★",
    price: "$160",
    discountedPrice: "$130 -30%",
    description:
      "A trendy Skinny Jeans with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "XLarge"],
  },

  // Add more products as needed
];

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const product2 = products.find((p) => p.id.toString() === params.id);

  // States
  const [selectedImage, setSelectedImage] = useState(product2?.images[0]);
  const [selectedColor, setSelectedColor] = useState(product2?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product2?.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product2) {
    return <p>Product not found!</p>;
  }

  // Quantity Handler
  const handleQuantity = (type: "increase" | "decrease") => {
    if (type === "increase") setQuantity((prev) => prev + 1);
    if (type === "decrease" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">All Products</span>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side: Images */}
        <div className="flex flex-col gap-4">
          {/* Large Image */}
          {selectedImage && (
            <div className="w-full h-96 sm:h-96 md:h-96 xl:h-96 rounded-xl overflow-hidden">
              <Image
                src={selectedImage}
                alt={product2.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {/* Small Images */}
          <div className="grid grid-cols-3 gap-2">
            {product2.images.map((img, index) => (
              <div
                key={index}
                className="w-full h-24 sm:h-40 md:h-40 xl:h-40 rounded-xl overflow-hidden border-2 cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Product Image ${index}`}
                  className={`w-full h-full object-cover cursor-pointer rounded-xl border-2 ${
                    selectedImage === img ? "border-black" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product2.name}</h1>
          <p className="text-yellow-400 text-xl mb-2">{product2.rating}</p>
          <div className="flex items-center gap-4">
            {product2.discountedPrice ? (
              <>
                <p className="text-xl font-bold text-gray-800 line-through">
                  {product2.price}
                </p>
                <p className="text-xl font-bold text-red-500">
                  {product2.discountedPrice}
                </p>
              </>
            ) : (
              <p className="text-xl font-bold text-gray-800">
                {product2.price}
              </p>
            )}
          </div>
          <p className="text-gray-600 mb-4">{product2.description}</p>

          {/* Select Color */}
          <hr className="my-4" />
          <p className="text-lg font-semibold mb-2">Select Color</p>
          <div className="flex gap-2">
            {product2.colors.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full cursor-pointer ${
                  selectedColor === color ? "ring-2 ring-cyan-400" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>

          {/* Choose Size */}
          <hr className="my-4" />
          <p className="text-lg font-semibold mb-2">Choose Size</p>
          <div className="flex gap-2">
            {product2.sizes.map((size, index) => (
              <button
                key={index}
                className={` px-1 py-2 md:px-5 md:py-2 border rounded-xl md:rounded-full xl:rounded-full ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity Counter */}
          <hr className="my-4" />
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-full bg-slate-200">
              <button
                onClick={() => handleQuantity("decrease")}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantity("increase")}
                className="px-4 py-1 font-bold"
              >
                +
              </button>
            </div>
            <Link href="/cart">
              <button className="px-6 md:px-20 xl:px-28 py-2 bg-black text-white rounded-full">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <main className="min-h-screen">
        <ReviewPage />
        <YmightProduct />
      </main>
    </>
  );
};

export default ProductDetails;
