import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="w-full max-w-[1240px] flex items-center px-4 sm:px-6">
        <h1 className="text-[32px] font-bold sm:text-[24px]">SHOP.CO</h1>
        <div className="flex flex-row gap-8 ml-6 px-12 items-center text-[16px] sm:text-[14px] sm:ml-4">
          <div className="flex items-center">
            <p>Shop</p>
            <Image 
              src="/images/Vector.png" 
              alt="List Arrow" 
              width={16} 
              height={16} 
            />
          </div>
          <p>On Sale</p>
          <p>New Arrivals</p>
          <p>Brands</p>
        </div>
        <div className="flex items-center ml-1 gap-4 sm:gap-2">
          <div
            className="flex items-center border rounded-lg shadow-sm bg-white"
            style={{ width: '577px', height: '48px' }}
          >
            <Search className="w-5 h-5 text-gray-500 mx-2" />
            <Input
              type="text"
              placeholder="Search for products..."
              className="border-none outline-none flex-grow text-gray-700 bg-transparent"
            />
          </div>
          <Image
            src="/images/Cart.png"
            alt="Cart Icon"
            width={48}
            height={48}
            className="w-12 h-12 ml-1 sm:w-[62px] sm:h-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
