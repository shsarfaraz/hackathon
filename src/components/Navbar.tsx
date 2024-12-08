import React from 'react';

function Navbar() {
  return (
    <div className='w-full h-[41px] flex items-center justify-center mt-5'>
      <div className='w-full max-w-[1240px] h-[41px] flex items-center px-4 sm:px-6'>
      
        <h1 className='text-[32px] font-bold sm:text-[24px]'>SHOP.CO</h1>

        <div className='flex flex-row gap-[48px] ml-[32px] items-center whitespace-nowrap text-[16px] sm:text-[14px] sm:ml-4'>
          <div className='flex items-center'>
            <p>Shop</p>
            <img src="/images/Vector.png" alt='Vector Icon' className='ml-2 w-[16px] h-[16px]' />
          </div>

          <p>On Sale</p>
          <p>New Arrivals</p>
          <p>Brand</p>
        </div>

        <div className='flex items-center ml-auto gap-4 sm:gap-2'>
          <img src="/images/search.png" alt='Search Icon' className='w-[577px] h-[48px] ml-[32px] sm:w-[150px] sm:h-[40px]' />
          <img src="/images/Cart.png" alt='Cart Icon' className='w-auto h-auto sm:w-[24px] sm:h-[24px]' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
