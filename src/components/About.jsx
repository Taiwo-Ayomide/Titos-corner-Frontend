import React from 'react'

const About = () => {
  return (
    <section className='xl:pt-5 lg:pt-5 md:pt-2 sm:pt-2 pt-2 overflow-hidden'>
        <div className='pt-10 w-full h-auto pb-10 block xl:flex lg:flex md:flex sm:block overflow-hidden' data-aos="fade-up" data-aos-duration="3000">
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full">
              <img src="logo.png" className='w-10/12 xl:mr-5 lg:mr-10 md:mr-5 sm:mr-16 mr-8 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-10/12' alt="" />
            </div>
            <div className='xl:pt-32 xl:w-6/12 lg:w-6/12 md:w-6/12 ml-5 sm:w-full w-full'>
              <h1 className='font-sans font-bold text-2xl pr-5'>HEY THERE, WELCOME TO MY WORLD</h1>
              <p className='text-justify xl:pl-1 lg:pl-1 md:pl-1 sm:pl-10 pl-1 xl:pr-32 lg:pr-32 md:pr-32 sm:pr-12 pr-12 leading-10'>I'm Bolutito , and I'm so glad you stopped by! This website is my little slice of the internet, where I get to share all the things I love. So grab a cup of tea, make yourself comfortable, and let me give you a quick tour!</p>
            </div>
        </div>
    </section>
  )
}

export default About
