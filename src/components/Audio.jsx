import React from 'react'

const Audio = () => {
  return (
    <section className='xl:pt-5 lg:pt-5 md:pt-2 sm:pt-2 pt-2 overflow-hidden' >
        <div className='pt-10 w-full h-auto bg-red-100 pb-10 block xl:flex lg:flex md:flex sm:block overflow-hidden' data-aos="fade-out" data-aos-duration="3000">
            <div className='xl:pt-32 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full'>
                <h1 className='font-sans font-bold text-2xl xl:pl-32 lg:pl-32 md:pl-32 sm:pl-10 pl-5'>TITOS PODCAST</h1>
                <p className='text-justify lg:pl-32 md:pl-32 sm:pl-10 pl-5 xl:pr-32 lg:pr-32 md:pr-32 sm:pr-12 p-12 leading-10'>Spill the Tea with Jesus Ever wondered what it's like to have a Bible study with a side of fun? That's what my podcast is all about! Join me for "Spill the Tea with Jesus," where we dive into the heart of the Bible and get to know Jesus better. It’s all about sharing the lessons that light up our lives in a relaxed and relatable way.</p>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full">
                <img src="logo.png" className='w-10/12 xl:mr-5 lg:mr-10 md:mr-5 sm:mr-16 mr-8 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-10/12' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Audio
