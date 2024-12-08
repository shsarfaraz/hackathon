import React from 'react';
import { TfiEmail } from "react-icons/tfi"; // Email icon from react-icons/tfi

function Offers() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[1240px] h-auto bg-black flex items-center rounded-[20px] py-10 px-16">
        {/* Left Section - Heading */}
        <div className="flex-1">
          <h1 className="text-[40px] text-white font-bold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>

        {/* Right Section - Input Fields */}
        <div className="flex flex-col gap-5">
          {/* Email Input with Icon */}
          <div className="relative w-[349px]">
            <TfiEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-[24px]" />
            <input
              className="w-full h-[46px] rounded-[20px] pl-10 pr-4"
              type="text"
              placeholder="Enter your email address"
            />
          </div>

          {/* Newsletter Input */}
          <input
            className="w-[349px] h-[46px] rounded-[20px] px-4 placeholder-black"
            type="text"
            placeholder="Subscribe to Newsletter"
          />
        </div>
      </div>
    </div>
  );
}

export default Offers;
