import React from 'react'
import { HomeModernIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='w-full h-auto pt-10 pb-10 ps-10 bg-gray-800 block xl:flex lg:flex md:flex sm:block justify-between' data-aos="fade-up" data-aos-duration="3000">
        <aside>
            <img src="logo.png" className='xl:w-24 lg:w-24 md:w-20 sm:w-24 w-24' alt="" />
            <h1 className='text-white font'>TITO'S CORNER</h1>
        </aside>
        <aside>
            <div className="font text-white pb-10">USEFUL NAVIGATION</div>
            <ul className=' leading-7'>
                <li className='text-white font'><Link to="/">Home</Link></li>
                <li className='text-white font'><Link to="/blog">Blogs</Link></li>
                <li className='text-white font'><Link to="/books">E-books</Link></li>
                <li className='text-white font'><Link to="/recipe">Recipe</Link></li>
                <li className='text-white font'><Link to="/audio">Podcast</Link></li>
                <li className='text-white font'><Link to="">Gallery</Link></li>
                <li className='text-white font'><Link to="">Contact</Link></li>
            </ul>
        </aside>
        <aside className='pe-5'>
            <div className="font text-white pb-10">Contact us</div>
            <div className='flex'>
                <h1><HomeModernIcon className='w-5 text-white' /></h1>
                <h1 className='ps-2 text-white font'>Amunloko, Ojoo, Ibadan, Oyo State, Nigeria.</h1>
            </div>
            <div className='flex pt-5'>
                <h1><PhoneIcon className='w-5 text-white' /></h1>
                <h1 className='ps-2 text-white font'>0814 336 1746, +0814 142 4351</h1>
            </div>
            {/* <div className='flex'>
                <h1><Facebook className='w-5 text-white' /></h1>
                <h1 className='ps-2 text-white font'>+0814 123 4567, +0814 142 4351</h1>
            </div> */}
        </aside>
    </div>
  )
}

export default Footer
