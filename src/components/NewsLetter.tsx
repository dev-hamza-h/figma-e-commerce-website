export default function NewsLetter() {
  return (
      <div className="bg-black text-white py-6 px-4 mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center rounded-xl mt-10">
          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center md:text-left w-full md:w-1/2">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>

          {/* Input and Button */}
          <div className="flex flex-col md:flex-col space-y-4 items-center w-full mt-4 md:mt-0 md:w-1/2">
              <input
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-full px-4 py-2 w-full md:w-auto"
              />
              <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded-full font-medium w-full md:w-auto"
              >
                  Subscribe to Newsletter
              </button>
          </div>
      </div>
  );
}
