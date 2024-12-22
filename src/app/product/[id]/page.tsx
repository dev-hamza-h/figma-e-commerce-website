"use client";

import YmightProduct from "@/components/product/y-might-shop-product";
import { useState } from "react";
import Image from "next/image";
import ProductTwo from "@/assets/images/jeans.png";
import ProductThree from "@/assets/images/Red-blue-shirt.png";
import ProductFour from "@/assets/images/orange-tshirt.png";
import GraphicPossImg from "@/assets/images/graphic-poss-boy-t-shirt.png";
import GraphicImg from "@/assets/images/graphic-t-shirt.webp";
import TSproductOne from "@/assets/images/green-shirt.png";
import TSproductTwo from "@/assets/images/Half-tshirt.png";
import TSproductThree from "@/assets/images/short-jeans.png";
import Product1 from "@/assets/images/y-might-p1.png";
import Product2 from "@/assets/images/y-might-p2.png";
import Product3 from "@/assets/images/y-might-p3.png";
import Product4 from "@/assets/images/y-might-p4.png";
import ReviewPage from "@/components/reviewcard/page";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Product Data
const products = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    images: [Product1, GraphicImg, GraphicPossImg],
    name: "Polo with Contrast Trims",
    rating: "★★★★",
    price: "$160",
    discountedPrice: "$130 -30%",
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "XLarge"],
  },
  {
    id: 8,
    images: [Product2, GraphicImg, GraphicPossImg],
    name: "Gradient Graphic T-shirt",
    rating: "★★",
    price: "$160",
    discountedPrice: "$130 -30%",
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "XLarge"],
  },
  {
    id: 9,
    images: [Product3, GraphicImg, GraphicPossImg],
    name: "Polo with Tipping Details",
    rating: "★★★★",
    price: "$160",
    discountedPrice: "$130 -30%",
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "XLarge"],
  },
  {
    id: 10,
    images: [Product4, GraphicImg, GraphicPossImg],
    name: "Black Sripped T-shirt",
    rating: "★★★★",
    price: "$160",
    discountedPrice: "$130 -30%",
    description:
      "A trendy T-shirt with tape details, comfortable for daily wear.",
    colors: ["#4F4631", "#314F4A", "#FFA500"],
    sizes: ["Small", "Medium", "Large", "XLarge"],
  },
  // Add more products as needed
];

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const product = products.find((p) => p.id.toString() === params.id);

  // States
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
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
      <div className="flex items-centre text-sm text-gray-500 mb-4 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 mt-1" />
        <span className="text-gray-900">All Products</span>
      </div>

      <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side: Images */}
        <div className="flex flex-col gap-4">
          {/* Large Image */}
          {selectedImage && (
            <div className="w-full h-96 sm:h-96 md:h-96 xl:h-96 rounded-xl overflow-hidden">
              <Image
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {/* Small Images */}
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((img, index) => (
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
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-yellow-400 text-xl mb-2">{product.rating}</p>
          <div className="flex items-center gap-4">
            {product.discountedPrice ? (
              <>
                <p className="text-xl font-bold text-gray-800 line-through">
                  {product.price}
                </p>
                <p className="text-xl font-bold text-red-500">
                  {product.discountedPrice}
                </p>
              </>
            ) : (
              <p className="text-xl font-bold text-gray-800">{product.price}</p>
            )}
          </div>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Select Color */}
          <hr className="my-4" />
          <p className="text-lg font-semibold mb-2">Select Color</p>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
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
            {product.sizes.map((size, index) => (
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
