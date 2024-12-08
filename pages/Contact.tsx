import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import "../src/app/globals.css"
import Footer from '@/app/components/Footer';

const Contact = () => {
  return (
    <>
    <div className='' id='about' style={{ backgroundImage: "url(background.png)" }}>
    <div className='flex justify-center' ><img src="./contact.png" alt="icon" />
    
    </div>
    
  </div>

  <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4">
        Get In Touch With Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Working Time</h3>
            <p className="text-gray-600">
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              placeholder="This is optional"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              placeholder="Hi! I'd like to ask about..."
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-sm hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  
  <Footer />
  </>
  )
}
  export default Contact;