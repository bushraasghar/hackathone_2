import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import "../src/app/globals.css"
import Footer from '@/app/components/Footer';

const products = [
  { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "pic1.png" },
  { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "pic2.png" },
  { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "pic3.png" },
  { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "pic4.png" },
  { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", image: "pic5.png" },
  { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", image: "pic6.png" },
  { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", image: "pic7.png" },
  { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "pic8.png" },
  { id: 9, name: "Plain console_", price: "Rs. 258,200.00", image: "pic9.png" },
  { id: 10, name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "pic10.png" },
  { id: 11, name: "SJP_0825", price: "Rs. 200,000.00", image: "pic11.png" },
  { id: 12, name: "Bella chair and table", price: "Rs. 100,000.00", image: "pic12.png" },
];
const Shop = () => {
  return (
    <>
    <div className='' id='shop' style={{ backgroundImage: "url(background.png)" }}>
      <div className='flex justify-center  ' ><img src="./shopicon.png" alt="" />
      
      </div>
      <div className='flex justify-center text-center'>
    <a href='home'>  <h4 className='flex justify-center '>Home <FaChevronRight /></h4></a>
    <a href='shop'>  <h4 className='flex justify-center '>Shop</h4></a>
    </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 border border-gray-300 p-4 rounded-md shadow-sm">
    {/* Left Section */}
    <div className="flex items-center gap-4">
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
        Filter
      </button>
      <span className="text-gray-600 text-sm">Showing 1–16 of 32 results</span>
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-4 mt-4 lg:mt-0">
      <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
        Show:
      </label>
      <input
        id="itemsPerPage"
        type="number"
        defaultValue="16"
        min="1"
        className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm"
      />
      <label htmlFor="sortBy" className="text-sm text-gray-600">
        Sort by:
      </label>
      <select
        id="sortBy"
        className="px-2 py-1 border border-gray-300 rounded-md text-sm bg-white"
      >
        <option value="default">Default</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Product Grid</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-sm font-medium text-gray-700">{product.name}</h2>
            <p className="text-lg font-semibold text-gray-900">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Shop