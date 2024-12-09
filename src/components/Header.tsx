import React from "react";
import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from "react-icons/fa"; // React Icons

const Header: React.FC = () => {
  return (
    <header className="border-b shadow-md">
      {/* Top bar */}
      <div className="bg-black text-white text-sm flex justify-center items-center px-4 py-2 space-x-2">
        <span>Sign up and get 20% off your first order.</span>
        <a href="#" className="underline hover:text-gray-300">Sign Up Now</a>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold ml-24">SHOP.CO</div> 

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#" className="flex items-center hover:text-black">
            Shop
            <FaChevronDown className="ml-1 text-sm" /> {/* Down arrow for dropdown */}
          </a>
          <a href="#" className="flex items-center hover:text-black">On Sale</a>
          <a href="#" className="hover:text-black">New Arrivals</a>
          <a href="#" className="hover:text-black">Brands</a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> {/* Search Icon */}
            <input
              type="text"
              placeholder="Search for products..."
              className="border rounded-full pl-10 pr-4 py-2 text-sm w-[510px] focus:outline-none focus:ring focus:ring-gray-300" // Added `pl-10` for icon spacing
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-gray-700">
            <button className="hover:text-black">
              <FaShoppingCart className="w-6 h-6 mr-4" /> {/* Shopping Cart Icon with right space */}
            </button>
            <button className="hover:text-black">
              <FaUser className="w-6 h-6 mr-24" /> {/* User Icon with right space */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
