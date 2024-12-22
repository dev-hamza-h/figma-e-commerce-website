import ReviewCard from "@/components/reviewcard/ReviewCard";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Samantha D.",
      date: "Posted on August 14, 2023",
      rating: 5,
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's my favorite go-to shirt.",
    },
    {
      name: "Alex M.",
      date: "Posted on August 15, 2023",
      rating: 4,
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the quality is top-notch.",
    },
    {
      name: "Ethan R.",
      date: "Posted on August 16, 2023",
      rating: 4.5,
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design and perfect fit.",
    },
    {
      name: "Olivia P.",
      date: "Posted on August 17, 2023",
      rating: 5,
      comment:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt stands out.",
    },
    {
      name: "Liam K.",
      date: "Posted on August 18, 2023",
      rating: 5,
      comment:
        "This t-shirt is a fusion of comfort and creativity. Wearing it feels like art.",
    },
    {
      name: "Ava H.",
      date: "Posted on August 19, 2023",
      rating: 4.5,
      comment:
        "I'm not just wearing a t-shirt; I'm wearing a design philosophy. It's a conversation starter.",
    },
  ];

  return (
    <main className="min-h-screen max-w-screen-2xl bg-white p-8 mx-auto">
      {/* Top Navigation */}
      {/* Top Navigation */}
      <div className="flex justify-between items-center border-b pb-4 mb-6  sm:px-20">
        <button className="text-gray-700 hover:text-black relative group whitespace-nowrap">
          Product Details
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </button>
        <button className="text-gray-700 hover:text-black relative group whitespace-nowrap">
          Rating & Reviews
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </button>
        <button className="text-gray-700 hover:text-black relative group whitespace-nowrap">
          FAQs
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all"></span>
        </button>
      </div>

      {/* All Reviews Section */}
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <div className="flex flex-nowrap justify-between items-center mb-6">
          <div className="inline-flex items-baseline space-x-2">
            {" "}
            {/* Changed flex to inline-flex */}
            <h1 className="text-lg sm:text-2xl font-bold whitespace-nowrap">
              All Reviews
            </h1>
            <span className="text-xs sm:text-sm text-gray-500 ">(451)</span>
          </div>
          <div className="flex md:space-x-2 lg:space-x-4 items-center">
            <button className="bg-gray-200 border rounded-full px-2 sm:px-4 py-2 text-xs sm:text-base whitespace-nowrap">
              Latest
            </button>
            <button className="bg-black text-white px-2 sm:px-4 py-3 rounded-full hover:bg-gray-800 text-xs sm:text-base whitespace-nowrap">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8 px-4">
          <button className="bg-white border text-black px-6 py-3 rounded-full hover:bg-gray-200 w-full sm:w-auto">
            Load More Reviews
          </button>
        </div>
      </div>
    </main>
  );
}
