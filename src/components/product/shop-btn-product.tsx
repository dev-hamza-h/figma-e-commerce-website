"use client"

import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { fetchShopbtn, Product } from "@/utils/fetchProduct";
import { Filters } from '@/components/product/shop-btn-filters'
import { cn } from '@/lib/utils'
import { satoshi } from '@/app/ui/fonts'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image';
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";

const ShopProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchShopbtn();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const sortOptions = [
    { label: 'Most Popular', value: 'most-popular' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low-high' },
    { label: 'Price: High to Low', value: 'price-high-low' },
  ];

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">All Products</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className={cn("text-xl sm:text-2xl lg:text-3xl font-bold", satoshi.className)}>
            All Products
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-gray-500 text-sm sm:text-base font-normal">
              Showing 1-12 of 100 Products
            </span>
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <button 
                className="sm:hidden flex items-center gap-2 px-3 py-2 border rounded-lg"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="text-sm">Filters</span>
              </button>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="flex items-center gap-2 px-3 py-2 hover:border-black transition-colors">
                  <span className="text-sm">Sort by: {sortOptions[0].label}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <Filters />
          </div>
          
          {/* Mobile Filters */}
          <Filters isMobile isOpen={isMobileFilterOpen} onClose={() => setMobileFilterOpen(false)} />
          
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
              {loading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="p-4">
                    <Skeleton className="w-full h-64 mb-4 rounded-xl bg-gray-300 animate-pulse" />
                    <Skeleton className="w-3/4 h-6 mb-2 bg-gray-300 animate-pulse" />
                    <Skeleton className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse" />
                    <Skeleton className="w-1/2 h-6 bg-gray-300 animate-pulse" />
                  </div>
                ))
              ) : (
                products.map((product) => (
                  <div key={product._id} className="p-4 border-2 rounded-2xl">
                    <Link href={`/DetailedPage/${product._id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 mb-4 rounded-xl object-cover"
                        width={300}
                        height={300}
                      />
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-400 text-xl">{"★".repeat(Math.round(product.rating))}</span>
                        <span className="text-sm text-gray-500 ml-2">{product.rating}/5</span>
                      </div>
                      <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
                    </Link>
                  </div>
                ))
              )}
            </div>
            <div className="mt-8 sm:mt-12 flex items-center justify-center gap-1 sm:gap-2">
              <button className="p-1 sm:p-2 border rounded-lg hover:border-black transition-colors">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              {[1, 2, 3, '...', 9, 10].map((page, i) => (
                <button key={i} className="px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm sm:text-base hover:bg-gray-100">
                  {page}
                </button>
              ))}
              <button className="p-1 sm:p-2 border rounded-lg hover:border-black transition-colors">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
