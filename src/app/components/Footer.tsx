import React from 'react'

const Footer = () => {
  return (
    <>
         <div className="w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url(Frame2.png)" }}>
    
 </div>

 
    <footer className="bg-gray-50 text-gray-700 py-10" >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Address Section --> */}
            <div>
                <p className="text-sm">
                    400 University Drive Suite 200 Coral Gables, <br/>
                    FL 33134 USA
                </p>
            </div>

            {/* <!-- Links Section --> */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold mb-4">Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Home</a></li>
                        <li><a href="#" className="hover:text-gray-900">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-900">About</a></li>
                        <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Help</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Payment Options</a></li>
                        <li><a href="#" className="hover:text-gray-900">Returns</a></li>
                        <li><a href="#" className="hover:text-gray-900">Privacy Policies</a></li>
                    </ul>
                </div>
            </div>

            {/* <!-- Newsletter Section --> */}
            <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <form className="flex items-center space-x-2">
                    <input 
                        type="email" 
                        placeholder="Enter Your Email Address" 
                        className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-gray-200"
                    />
                    <button 
                        type="submit" 
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm">
            <p>2024 Meubel House. All rights reserved</p>
        </div>
    </footer>
</>
  )
}

export default Footer