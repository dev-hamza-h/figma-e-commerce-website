import React from "react";
import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
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
          {/* Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden hover:text-black">
                <Menu className="w-8 h-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-8 bg-white">
              {/* Sheet Content */}
              <div className="flex flex-col space-y-4">
                <div className="text-2xl font-extrabold">SHOP.CO</div>
                <a href="#" className="flex items-center hover:text-black">
                  Shop
                  <FaChevronDown className="ml-1 text-sm" />
                </a>
                <a href="#" className="flex items-center hover:text-black">
                  On Sale
                </a>
                <a href="#" className="hover:text-black">
                  New Arrivals
                </a>
                <a href="#" className="hover:text-black">
                  Brands
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
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
          <a href="#" className="flex items-center hover:text-black">
            Shop
            <FaChevronDown className="ml-1 text-xm" />
          </a>
          <a href="#" className="flex items-center hover:text-black">
            On Sale
          </a>
          <a href="#" className="hover:text-black">
            New Arrivals
          </a>
          <a href="#" className="hover:text-black">
            Brands
          </a>
        </nav>

        {/* Right: Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative md:hidden">
            <FaSearch className="w-6 h-6 hover:text-black" />
          </div>
          {/* Search bar for Large Screens */}
          <div className="hidden md:block relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="border rounded-full pl-10 pr-4 py-2 text-sm w-[140px] md:w-[170px] lg:w-[350px] focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Icons */}
          <button className="hover:text-black">
            <FaShoppingCart className="w-6 h-6" />
          </button>
          <button className="hover:text-black">
            <FaUser className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
