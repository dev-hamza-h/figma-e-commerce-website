"use client";

import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaSearch,
  FaTimes, // X icon for closing search
} from "react-icons/fa";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { fetchShopbtn } from "@/utils/fetchProduct";
import { Product } from "@/utils/fetchProduct";

const Header: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchShopbtn();
      setAllProducts(products);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, allProducts]);

  // Handle product click
  const handleProductClick = (productId: string, productName: string) => {
    setSearchTerm(productName);
    setFilteredProducts([]);
    router.push(`/DetailedPage/${productId}`);

    // Reset searchTerm when navigating to a new page
    setSearchTerm("");
  };

  return (
    <header className="border-b shadow-md sticky top-0 left-0 max-w-screen-2xl z-50 mx-auto">
      {/* Top bar */}
      <div className="bg-black text-white text-xs md:text-sm flex justify-center items-center px-2 py-2 space-x-2">
        <span>Sign up and get 20% off your first order.</span>
        <a href="#" className="underline hover:text-gray-300">
          Sign Up Now
        </a>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16 bg-white">
        {/* Left: Menu and Logo */}
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden hover:text-black">
                <Menu className="w-8 h-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-8 bg-white">
              <div className="flex flex-col space-y-4">
                <div className="text-2xl font-extrabold">SHOP.CO</div>
                <SheetClose asChild>
                  <Link
                    href="/shopbtn-product"
                    className="flex items-center hover:text-black cursor-pointer"
                  >
                    Shop
                    <FaChevronDown className="ml-1 text-sm" />
                  </Link>
                </SheetClose>

                <a href="#" className="flex items-center hover:text-black">
                  On Sale
                </a>

                <SheetClose asChild>
                  <Link
                    href="/newArrival-Link"
                    className="flex items-center hover:text-black cursor-pointer"
                  >
                    New Arrivals
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/shopbtn-product"
                    className="flex items-center hover:text-black cursor-pointer"
                  >
                    Brands
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          <div
            className={cn(
              "text-lg md:text-xl lg:text-2xl font-extrabold",
              integralCF.className
            )}
          >
            SHOP.CO
          </div>
        </div>

        {/* Middle: Navigation Links for Large Screens */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-gray-700">
          <Link
            href="/shopbtn-product"
            className="flex items-center hover:text-black cursor-pointer"
          >
            Shop
            <FaChevronDown className="ml-1 text-sm" />
          </Link>
          <a href="#" className="flex items-center hover:text-black">
            On Sale
          </a>
          <Link
            href="/newArrival-Link"
            className="flex items-center hover:text-black cursor-pointer"
          >
            New Arrivals
          </Link>
          <Link
            href="/shopbtn-product"
            className="flex items-center hover:text-black cursor-pointer"
          >
            Brands
          </Link>
        </nav>

        {/* Right: Search and Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* Mobile Search Icon */}
          {!showSearch && (
            <FaSearch
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setShowSearch(true)}
            />
          )}

          {/* Mobile Full-Screen Search Box */}
          {showSearch && (
            <div className="fixed top-[70px] left-0 w-full bg-white z-50 p-4">
              <div className="relative w-full max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="border rounded-full px-4 py-3 text-lg w-full focus:outline-none focus:ring focus:ring-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Close Button */}
                <FaTimes
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-2xl"
                  onClick={() => setShowSearch(false)}
                />
                {/* Search Results */}
                {searchTerm && filteredProducts.length === 0 && (
                  <div className="absolute top-full left-0 w-full bg-white border shadow-md rounded-md mt-2 z-50 p-4 text-center text-gray-500">
                    No products found
                  </div>
                )}

                {filteredProducts.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white border shadow-md rounded-md mt-2 z-50 max-h-60 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <li
                        key={product._id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleProductClick(product._id, product.name)
                        }
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Desktop Search Bar */}
          <div className="relative hidden md:block w-[140px] md:w-[170px] lg:w-[350px]">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="border rounded-full pl-10 pr-4 py-2 text-sm w-full focus:outline-none focus:ring focus:ring-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredProducts.length > 0 ? (
              <ul className="absolute top-full left-0 w-full bg-white border shadow-md rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <li
                    key={product._id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleProductClick(product._id, product.name)
                    }
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            ) : (
              searchTerm && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-md rounded-md mt-1 z-50 p-4 text-center text-gray-500">
                  No products found
                </div>
              )
            )}
          </div>

          <Link href="/cart" className="hover:text-black">
            <FaShoppingCart className="w-6 h-6" />
          </Link>
          <SignedOut>
            <SignInButton>
              <button className="hover:text-black">
                <FaUser className="w-6 h-6" />
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
