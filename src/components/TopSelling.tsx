import Image from 'next/image';
import TSproductOne from "@/assets/images/green-shirt.png";
import TSproductTwo from "@/assets/images/Half-tshirt.png";
import TSproductThree from "@/assets/images/short-jeans.png";
import TSproductFour from "@/assets/images/black-jeans.png";

import React from 'react';

const NewArrivals = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-8">
      <h2 className="text-3xl font-extrabold text-center mb-8">TOP SELLING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="p-4">
          <Image src={TSproductOne} alt="Skinny Fit Jeans" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">Skinny Fit Jeans</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">3.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800 line-through">$260</p>
          <p className="text-xl font-bold text-red-500">$240 <span className="text-sm text-red-500">-20%</span></p>
        </div>
        {/* Product 2 */}
        <div className="p-4">
          <Image src={TSproductTwo} alt="T-shirt with Tape Details" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">T-shirt with Tape Details</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">4.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800">$120</p>
        </div>
        {/* Product 3 */}
        <div className="p-4">
          <Image src={TSproductThree} alt="Checkered Shirt" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">Checkered Shirt</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">4.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800">$180</p>
        </div>
        {/* Product 4 */}
        <div className="p-4">
          <Image src={TSproductFour} alt="T-shirt with Tape Details" className="w-full h-64 mb-4 rounded-md" />
          <h3 className="text-xl font-semibold mb-2">T-shirt with Tape Details</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-2">4.5/5</span>
          </div>
          <p className="text-xl font-bold text-gray-800">$120</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 font-semibold rounded-full border-2 bg-white hover:bg-black hover:text-white">View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
