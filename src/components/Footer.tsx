"use client";

import Visa from "@/assets/images/visa.png";
import Nayapay from "@/assets/images/nayapay.png";
import Paypal from "@/assets/images/paypal.png";
import Applepay from "@/assets/images/applepay.png";
import Gogglepay from "@/assets/images/gpay.png";

import { useState } from "react";
import { Mail } from "lucide-react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Image from "next/image";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");

  const hSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="relative mt-32 bg-gray-100 pt-40 md:pt-32">
      {/* Newsletter Section */}
      <div className="absolute -top-24 left-1/2 w-full max-w-[1240px] -translate-x-1/2 px-4">
        <div className="rounded-[32px] bg-black p-6 md:p-8">
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <h2
              className={`${integralCF.className} mb-6 text-2xl font-bold leading-tight text-white md:mb-0 md:max-w-[450px] md:text-[32px]`}
            >
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <form onSubmit={hSubmit} className="flex flex-col gap-4 md:gap-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-full bg-white pl-12 pr-4 text-base outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-200 md:w-[280px]"
                  required
                />
              </div>
              <button
                type="submit"
                className="h-12 rounded-full bg-white px-8 font-medium text-black transition-colors hover:bg-gray-100"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="px-6 md:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Logo and About */}
        <div>
          <h3
            className={cn(
              "font-extrabold text-black text-lg",
              integralCF.className
            )}
          >
            SHOP.CO
          </h3>
          <p className="mt-2">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-500 hover:text-black">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <FaFacebook size={20} />
            </a>
            <a href="#" className=" text-gray-500 hover:text-black">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>

        {/* Company & Help */}
        <div className="sm:col-span-1 md:col-span-1">
          <h4 className="font-bold text-black">COMPANY</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-1 md:col-span-1">
          <h4 className="font-bold text-black">HELP</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ and Resources */}
        <div className="sm:col-span-1 md:col-span-1">
          <h4 className="font-bold text-black">FAQ</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-1 md:col-span-1">
          <h4 className="font-bold text-black">RESOURCES</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 py-4 sm:px-6 md:12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        <p className="text-center">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <Image src={Visa} alt="Visa" className="h-8 w-auto" />
          <Image src={Nayapay} alt="Nayapay" className="h-8 w-auto" />
          <Image src={Paypal} alt="PayPal" className="h-8 w-auto" />
          <Image src={Applepay} alt="Apple Pay" className="h-8 w-auto" />
          <Image src={Gogglepay} alt="Google Pay" className="h-8 w-auto" />
        </div>
      </div>
    </footer>
  );
}
