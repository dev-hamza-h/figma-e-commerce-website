import HeroImg from "@/assets/images/couple.png";
import Versac from "@/assets/images/versace.png";
import Zara from "@/assets/images/zara.png";
import Gucci from "@/assets/images/gucci.png";
import Prada from "@/assets/images/prada.png";
import Calvin from "@/assets/images/calvin.png";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-12 px-2 md:px-12 lg:px-16 max-w-screen-2xl mx-auto ">
      <div className=" grid md:grid-cols-2 items-center gap-8 ">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1
            className={cn(
              "text-4xl text-start md:text-5xl font-extrabold text-gray-900 leading-tight",
              integralCF.className
            )}
          >
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-start mt-4 text-lg">
            Browse through our diverse range of meticulouslmty crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 px-20 py-3 md:px-8 md:py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800">
            Shop Now
          </button>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2   md:grid md:grid-cols-3 gap-4 text-center md:ml-[-40px] ">
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                200+
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                International Brands
              </p>
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                2,000+
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                High-Quality Products
              </p>
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                30,000+
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Image */}
          <Image src={HeroImg} alt="Stylish Couple" width={800} height={1000} />
          {/* Decorative Stars */}
          <div className="absolute top-4 right-6 text-black">
            <StarIcon className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1/3 left-0">
            <StarIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="bg-black py-6 w-full absolute inset-x-0 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap justify-center items-center px-4 sm:px-8">
          {/* Logos */}
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 m-2">
            <Image src={Versac} alt="Versace Logo" width={100} height={50} />
          </div>
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 m-2">
            <Image src={Zara} alt="Zara Logo" width={100} height={50} />
          </div>
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 m-2">
            <Image src={Gucci} alt="Gucci Logo" width={100} height={50} />
          </div>
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 m-2">
            <Image src={Prada} alt="Prada Logo" width={100} height={50} />
          </div>
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 m-2">
            <Image
              src={Calvin}
              alt="Calvin Klein Logo"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


  {/* StarIcon Content */}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
