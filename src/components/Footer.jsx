import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-44' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 ml-3'>Thanks for stopping by ✌️
                    <p>We’re just a bunch of people who love good products and better vibes.
                        <p>Made with 💛 in India — keep shopping, keep shining.</p>
                    </p>
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 mt-2'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
             <div>
                <p className='text-xl font-medium mb-5 mt-2'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9999999999</li>
                    <li>contact@velvetvogue.com</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
