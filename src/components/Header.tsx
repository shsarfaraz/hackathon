import React from 'react'

function Header() {
  return (
    <div className='w-full h-auto bg-black flex items-center justify-center relative px-4 py-2'>
      <h1 className='text-white text-[14px] text-center'>
        Sign up and get 20% off to your first order. 
        <button className="bg-black text-white p-1 underline pl-5">Sign Up Now</button>
      </h1>
      <div className='absolute right-4 text-white cursor-pointer'>
        X
      </div>
    </div>
  )
}

export default Header
