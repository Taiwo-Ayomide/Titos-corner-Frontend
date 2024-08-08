import React from 'react'

const Advert = () => {
  return (
    <section className='xl:pt-16 lg:pt-16 md:pt-16 sm:pt-16 pt-16'>
        <div className='pt-32 bg-yellow-100 w-full h-auto pb-32 block xl:flex lg:flex md:flex sm:block' data-aos="fade-up" data-aos-duration="3000">
            <div className='pt-1 ms:pt-4 xl:pt-24 lg:pt-4'>
                <h1 className='text-5xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-7xl font-new font-bold ms-10 text-red-500'>TITO'S CORNER</h1>
                <h1 className='xl:text-4xl lg:text-4xl md:text-3xl sm:text-4xl text-3xl mt-8 font-new font-semibold ms-10 text-red-500'>FOOD RECIPE</h1>
            </div>
            <div>
                <img src="food.png" className='w-10/12 xl:ms-16 lg:ms-16 md:ms-16 sm:ms-16 ms-8 xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Advert
