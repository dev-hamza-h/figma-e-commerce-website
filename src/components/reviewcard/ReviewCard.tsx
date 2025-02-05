import React from "react";

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const ReviewCard = ({ name, date, rating, comment }: ReviewProps) => {
  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={i < Math.floor(stars) ? "text-yellow-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="border rounded-xl p-4 bg-white relative shadow-sm hover:shadow-lg transition-shadow ">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center mb-2">
          {renderStars(rating)}
          <span className="text-sm text-gray-600 ml-2">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="text-gray-400 cursor-pointer text-xl">⋮</div>
      </div>

      {/* Name */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-gray-900">
          {name} <span className=" text-green-500">✔</span>
        </h2>
      </div>

      {/* Comment */}
      <p className="text-gray-700 text-sm mb-4">{comment}</p>

      {/* Date */}
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};

export default ReviewCard;
