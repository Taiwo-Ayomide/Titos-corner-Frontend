import React from 'react'

const Blog = () => {
  return (
    <section className='xl:pt-5 lg:pt-5 bg-red-100 md:pt-2 sm:pt-2 pt-2'>
        <div className='pt-10 w-full h-auto pb-10 block xl:flex lg:flex md:flex sm:block' data-aos="fade-down-right" data-aos-anchor-placement="top-bottom">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full">
                <img src="logo.png" className='w-10/12 xl:mr-5 lg:mr-10 md:mr-5 sm:mr-16 mr-8 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-10/12' alt="" />
            </div>
            <div className='xl:pt-32 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full'>
                <h1 className='font-sans font-bold text-2xl pr-5 pl-5'>TITOS BLOG</h1>
                <p className='text-justify xl:pl-1 lg:pl-1 md:pl-1 sm:pl-10 pl-5 xl:pr-32 lg:pr-32 md:pr-32 sm:pr-12 pr-12 leading-10'>Blog Adventures: Life is full of twists and turns, and my blog is where I chat about it all. Whether it's a funny mishap or a moment of reflection, I write about the things that make life beautifully messy and utterly relatable.</p>
            </div>
        </div>
    </section>
  )
}

export default Blog
