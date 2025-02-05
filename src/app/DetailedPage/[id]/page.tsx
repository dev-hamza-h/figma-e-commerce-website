"use client";

import { Skeleton } from "@/components/ui/skeleton"; 
import { fetchProductById } from "@/utils/fetchProduct";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import ReviewsPage from "@/components/reviewcard/page";
import YmightProduct from "@/components/product/y-might-shop-product";

// Adjust the type definition for `params`
interface Props {
  params: {
    id: string | undefined; // params.id could be undefined here
  };
}

export default function ProductDetail({ params }: Props) {
  const [product, setProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    if (params.id) {
      async function fetchData() {
        const fetchedProduct = await fetchProductById(params.id ?? "");
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct?.image || null);
        setLoading(false); // Data loaded, set loading to false
      }
      fetchData();
    } else {
      console.error("Product ID is missing");
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <>
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 mt-1" />
          <span className="text-gray-900">All Products</span>
        </div>

        {/* Skeleton Loader */}
        <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Side: Skeleton Image */}
          <div className="flex flex-col">
            <Skeleton className="w-full h-96 rounded-xl bg-gray-300 animate-pulse" />
            <div className="flex mt-4 gap-2">
              <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gray-300 animate-pulse" />
            </div>
          </div>

          {/* Right Side: Skeleton Product Details */}
          <div>
            <Skeleton className="w-3/4 h-8 mb-4 bg-gray-300 animate-pulse" />
            <Skeleton className="w-1/2 h-6 mb-4 bg-gray-300 animate-pulse" />
            <Skeleton className="w-2/4 h-8 mb-4 bg-gray-300 animate-pulse" />
            <Skeleton className="w-full h-6 mb-4 bg-gray-300 animate-pulse" />
            <Skeleton className="w-full h-10 mb-4 bg-gray-300 animate-pulse" />
            <Skeleton className="w-1/4 h-10 mb-4 bg-gray-300 animate-pulse" />
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return <p className="text-center text-lg">Product not found</p>;
  }

  const handleQuantity = (type: "increase" | "decrease") => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-4 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 mt-1" />
        <span className="text-gray-900">All Products</span>
      </div>

      <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Side: Images */}
        <div className="flex flex-col">
          {/* Large Image */}
          <div className="w-full h-96 sm:h-96 md:h-96 xl:h-96 rounded-xl overflow-hidden">
            <Image
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full "
              width={500}
              height={500}
            />
          </div>

          {/* Small Image Below Large Image */}
          <div className="flex mt-4 gap-2">
            <div
              className={`w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-2 cursor-pointer ${selectedImage === product.image ? "border-black" : ""}`}
              onClick={() => setSelectedImage(product.image)}
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 text-xl">{"★".repeat(Math.round(product.rating))}</span>
            <span className="text-sm text-gray-500 ml-2">{product.rating}/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
          {product.discountPercent && (
            <p className="text-red-500 text-xl font-bold">{product.discountPercent}% OFF</p>
          )}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Select Color */}
          {product.colors && product.colors.length > 0 && (
            <>
              <hr className="my-4" />
              <p className="text-lg font-semibold mb-2">Select Color</p>
              <div className="flex gap-2">
                {product.colors.map((color: string, index: number) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? "ring-2 ring-cyan-400" : ""}`}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </>
          )}

          {/* Choose Size */}
          {product.sizes && product.sizes.length > 0 && (
            <>
              <hr className="my-4" />
              <p className="text-lg font-semibold mb-2">Choose Size</p>
              <div className="flex gap-2">
                {product.sizes.map((size: string, index: number) => (
                  <button
                    key={index}
                    className={`px-5 py-2 border rounded-full ${selectedSize === size ? "bg-black text-white" : "bg-gray-100"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Quantity Counter */}
          <hr className="my-4" />
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-full bg-slate-200">
              <button onClick={() => handleQuantity("decrease")} className="px-3 py-1">-</button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => handleQuantity("increase")} className="px-4 py-1 font-bold">+</button>
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
        <ReviewsPage />
        <YmightProduct />
      </main>
    </>
  );
}
