import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { BsCalendar4Event } from "react-icons/bs";
 
    export default function Home() {
      return (
      <>
        <div className="bg-pink-50 min-h-screen flex justify-center items-center">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FAF4F4] rounded-lg overflow-hidden text-center">
              {/* Image Placeholder */}
              <div className="h-[450px] bg-[#FAF4F4] flex items-center justify-center">
                <span className="text-gray-500">
                  <img src="./table1.png" alt="sofa" />
                </span>
              </div>
              {/* Text Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Side Table</h3>
                <a
                  href="#"
                  className="text-gray-600 underline mt-1 block hover:text-gray-800"
                >
                  View More
                </a>
              </div>
            </div>
    
            {/* Card 2 */}
            <div className="bg-[#FAF4F4] rounded-lg overflow-hidden text-center">
              {/* Image Placeholder */}
              <div className="h-[450px] bg-[#FAF4F4] flex items-center justify-center">
                <span className="text-gray-500">
                  <img src="./sofa1.png"/>
                </span>
              </div>
              {/* Text Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Side Sofa</h3>
                <a
                  href="#"
                  className="text-gray-600 underline mt-2 block hover:text-gray-800"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>


<div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Top Picks For You
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="text-center">
          <div className="h-48 bg-[#ffffff] mb-4 flex items-center justify-center">
            {/* Replace with Image */}
            <span><img src="./trentor1.png" alt="sell"/></span>
          </div>
          <h2 className="text-lg font-semibold">Trenton modular sofa_3</h2>
          <p className="text-gray-600">Rs. 25,000.00</p>
        </div>
        {/* Product 2 */}
        <div className="text-center">
          <div className="h-48 bg-[#ffffff] mb-4 flex items-center justify-center">
            {/* Replace with Image */}
            <span><img src="./dining1.png" alt="dining table" /></span>
          </div>
          <h2 className="text-lg font-semibold">Granite dining table with dining chair</h2>
          <p className="text-gray-600">Rs. 25,000.00</p>
        </div>
        {/* Product 3 */}
        <div className="text-center">
          <div className="h-48 bg-[#ffffff] mb-4 flex items-center justify-center">
            {/* Replace with Image */}
            <span><img src="./outdoor.png" alt="outdoor table"/></span>
          </div>
          <h2 className="text-lg font-semibold">Outdoor bar table and stool</h2>
          <p className="text-gray-600">Rs. 25,000.00</p>
        </div>
        {/* Product 4 */}
        <div className="text-center">
          <div className="h-48 bg-[#ffffff] mb-4 flex items-center justify-center">
            {/* Replace with Image */}
            <span><img src="./plain.png" alt="plain console"/></span>
          </div>
          <h2 className="text-lg font-semibold">Plain console with teak mirror</h2>
          <p className="text-gray-600">Rs. 25,000.00</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          View More
        </button>
      </div>
    </div>


    <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFF9E5] p-8 md:p-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="h-64 md:h-96 w-full bg-[#FFF9E5] flex items-center justify-center">
          {/* Replace with the image */}
          <span><img src="Asgaard.png"/></span>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-center md:text-right">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          New Arrivals
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Asgaard sofa
        </h1>
        <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          Order Now
        </button>
      </div>
    </div>


    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      {/* Header Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Our Blogs
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Find a bright ideal to suit your taste with our great selection
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-[300px] w-[300px] bg-gray-200 flex items-center justify-center">
            {/* Replace with actual image */}
            <span><img src="./goingall1.png" alt="pic1"/></span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              Going all-in with millennial design
            </h2>
            <button className="text-gray-900 justify-center font-medium mb-4">Read More</button>
            <div className="text-gray-500 text-sm flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <i className="material-icons"><CiAlarmOn /></i>
                <span>5 min</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="material-icons"><BsCalendar4Event /></i>
                <span>12th Oct 2022</span>
              </span>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-[300px] w-[300px] bg-gray-200 flex items-center justify-center">
            {/* Replace with actual image */}
            <span><img src="./goingall2.png" alt="pic 2"/></span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              Going all-in with millennial design
            </h2>
            <button className="text-gray-900 text-center font-medium mb-4">Read More</button>
            <div className="text-gray-500 text-sm flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <i className="material-icons"><CiAlarmOn /></i>
                <span>5 min</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="material-icons"><BsCalendar4Event /></i>
                <span>12th Oct 2022</span>
              </span>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-[300px] w-[300px] bg-gray-200 flex items-center justify-center">
            {/* Replace with actual image */}
            <span><img src="./goingall3.png" alt="pic 3"/></span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              Going all-in with millennial design
            </h2>
            <button className="text-gray-900 text-center font-medium mb-4">Read More</button>
            <div className="text-gray-500 text-sm flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <i className="material-icons"><CiAlarmOn /></i>
                <span>5 min</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="material-icons"><BsCalendar4Event /></i>
                <span>12th Oct 2022</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* View All Post Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          View All Post
        </button>
      </div>
    </div>

    </>
      );
    }
    
  