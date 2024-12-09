import Image from 'next/image';
import ProductOne from "@/assets/images/Black-tshirt.png"
import ProductTwo from "@/assets/images/jeans.png"
import ProductThree from "@/assets/images/Red-blue-shirt.png"
import ProductFour from "@/assets/images/orange-tshirt.png"


import React from 'react';

const NewArrivals = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-8">
      <h2 className="text-3xl font-extrabold text-center mb-8">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="p-4">
          <Image src={ProductOne} alt="T-shirt with Tape Details" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">T-shirt with Tape Details</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">4.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800">$120</p>
        </div>
        {/* Product 2 */}
        <div className="p-4">
          <Image src={ProductTwo} alt="Skinny Fit Jeans" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">Skinny Fit Jeans</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">3.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800 line-through">$260</p>
          <p className="text-xl font-bold text-red-500">$240 <span className="text-sm text-red-500">-20%</span></p>
        </div>
        {/* Product 3 */}
        <div className="p-4">
          <Image src={ProductThree} alt="Checkered Shirt" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">Checkered Shirt</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">4.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800">$180</p>
        </div>
        {/* Product 4 */}
        <div className="p-4">
          <Image src={ProductFour} alt="Sleeve Striped T-shirt" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">Sleeve Striped T-shirt</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">4.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800 line-through">$160</p>
          <p className="text-xl font-bold text-red-500">$130 <span className="text-sm text-red-500">-30%</span></p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 font-semibold rounded-full border-2 bg-white hover:bg-black hover:text-white">View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
