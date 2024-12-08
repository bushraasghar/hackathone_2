import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import "../src/app/globals.css"
import Footer from '@/app/components/Footer';

const About = () => {
  return (
    <>
    <div className='' id='about' style={{ backgroundImage: "url(background.png)" }}>
    <div className='flex justify-center' ><img src="./blog.png" alt="icon" />
    
    </div>
    
  </div>
  <img src='./blogpage.png' alt='page'/>
  <Footer />
  </>
  )
}

export default About