import HeroImg from "@/assets/images/couple.png";
import Star from "@/assets/images/Vector.png";
import Versac from "@/assets/images/versace.png";
import Zara from "@/assets/images/zara.png";
import Gucci from "@/assets/images/gucci.png";
import Prada from "@/assets/images/prada.png";
import Calvin from "@/assets/images/calvin.png";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800">
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center ml-[-40px]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">200+</h2>
              <p className="text-gray-600">International Brands</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">2,000+</h2>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">30,000+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Image */}
          <Image src={HeroImg} alt="Stylish Couple" width={800} height={1000} />

          {/* Star Decorations */}
          {/* Custom Adjustments */}
          <div
            className="absolute"
            style={{
              top: "240px",  
              left: "10px",
            }}
          >
            <Image src={Star} alt="Star Decoration" width={40} height={40} />
          </div>
          <div
            className="absolute"
            style={{
              bottom: "460px",  
              right: "30px"
            }}
          >
            <Image src={Star} alt="Star Decoration" width={60} height={60} />
          </div>
        </div>
      </div>

            {/* Brand Logos Section */}
            <div className="bg-black py-4 w-full absolute inset-x-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logos */}
          <Image src={Versac} alt="Versace Logo" width={100} height={50} />
          <Image src={Zara} alt="Zara Logo" width={100} height={50} />
          <Image src={Gucci} alt="Gucci Logo" width={100} height={50} />
          <Image src={Prada} alt="Prada Logo" width={100} height={50} />
          <Image src={Calvin} alt="Calvin Klein Logo" width={100} height={50} />
        </div>
      </div>
    </section>
  );
}
