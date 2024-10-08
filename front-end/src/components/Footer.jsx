import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    This is a footer that is gonna be displayed in all the pages
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delievery</li>
                    <li>Privacy Ploicy</li>

                </ul>
            </div>

            <div> 
                <p className='text-ul font-medium mb-5'>
                  Get In Touch
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-453-1324</li>
                    <li>daegrgr@gmail.com</li>

                </ul>
            </div>
        </div>
        <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All rights Reserved.</p>
            </div>

    </div>
  )
}

export default Footer