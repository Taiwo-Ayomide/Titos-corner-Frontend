import React from 'react'

const Recipe = () => {
  return (
    <section className='xl:pt-5 lg:pt-5 md:pt-2 sm:pt-2 pt-2'>
        <div className='pt-10 bg-blue-100 w-full h-auto pb-10 block xl:flex lg:flex md:flex sm:block' data-aos="fade-down" data-aos-duration="3000">
            <div className='xl:pt-32 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full'>
                <h1 className='font-sans font-bold text-2xl xl:pl-32 lg:pl-32 md:pl-32 sm:pl-10 pl-5'>TITOS RECIPE</h1>
                <p className='text-justify xl:pl-32 lg:pl-32 md:pl-32 sm:pl-10 pl-5 xl:pr-32 lg:pr-32 md:pr-32 sm:pr-12 pr-12 leading-10'>Cooking is one of my favorite ways to show love, and I'm thrilled to share some of my favorite recipes with you. These dishes are sprinkled with stories and a dash of my personality, so get ready to cook up some love!</p>
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full">
                <img src="logo.png" className='w-10/12 xl:mr-5 lg:mr-10 md:mr-5 sm:mr-16 mr-8 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-10/12' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Recipe
