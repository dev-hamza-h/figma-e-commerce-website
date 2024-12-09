"use client"


import React, { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emily R.",
    review:
      "Shop.co has completely transformed my wardrobe. Their clothes are stylish, comfortable, and perfect for every occasion. Highly recommended!",
  },
  {
    name: "Michael T.",
    review:
      "What I love about Shop.co is the consistency in quality and design. They’ve become my go-to for all my fashion needs!",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 3) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  // If less than 3 testimonials remain, append from the start
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Heading Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-left">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-2">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ←
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            →
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex gap-6 justify-center">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md max-w-sm"
          >
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <span className="ml-2 text-green-500">✔</span>
            </div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
