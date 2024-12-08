import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-[500px] sm:h-[600px] md:h-[768px] opacity-100 bg-[#FBEBB5] bg-cover bg-center" style={{ backgroundImage: "url(Frame1.png)" }}>
    <div className="w-full sm:py-4 sm:px-6 px-2 py-2 flex text-black justify-center items-center max-w-[1280px] m-auto">
      <div className="flex flex-wrap gap-6 items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex justify-start w-full sm:w-auto">
          <a href="/" className="text-2xl font-bold text-black">Furniture</a>
        </div>
  
        {/* Navigation Links */}
        <div className="flex gap-6 items-center justify-center w-full sm:w-auto">
          <Link href={"/home"} className="text-base hover:border-b-2 border-zinc-300 py-2 px-4">Home</Link>
          <Link href={"/Shop"} className="text-base hover:border-b-2 border-zinc-300 py-2 px-4">Shop</Link>
          <Link href={"/About"} className="text-base hover:border-b-2 border-zinc-300 py-2 px-4">About </Link>
          <Link href={"/Contact"} className="text-base hover:border-b-2 border-zinc-300 py-2 px-4">Contact</Link>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Header