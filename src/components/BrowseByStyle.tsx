import Image from "next/image";
import Casual from "@/assets/images/casual.png";
import Formal from "@/assets/images/formal.png";
import Party from "@/assets/images/party.png";
import Gym from "@/assets/images/gym.png";

const DressStyle = () => {
  return (
    <div className=" bg-gray-100 py-10 px-4 rounded-[40px] shadow-md mx-auto max-w-screen-xl">
      <h2 className="text-center text-2xl font-extrabold mb-8">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {/* Casual (Small Card) */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] md:ml-36 ">
          <Image
            src={Casual}
            alt="Casual"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black">
            Casual
          </p>
        </div>
        {/* Formal (Large Card) */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] sm:col-span-2 md:col-span-2 md:ml-36">
          <Image
            src={Formal}
            alt="Formal"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black">
            Formal
          </p>
        </div>
        {/* Party (Large Card) */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] sm:col-span-2 md:col-span-2 md:ml-36">
          <Image
            src={Party}
            alt="Party"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black">
            Party
          </p>
        </div>
        {/* Gym (Small Card) */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] md:ml-36">
          <Image
            src={Gym}
            alt="Gym"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black">
            Gym
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
