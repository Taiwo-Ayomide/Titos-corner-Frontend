import React from 'react'

const Blog = () => {
  return (
    <section className='xl:pt-5 lg:pt-5 md:pt-2 sm:pt-2 pt-2'>
        <div className='pt-10 w-full h-auto pb-10 block xl:flex lg:flex md:flex sm:block' data-aos="fade-up" data-aos-duration="3000">
            <div>
                <img src="logo.png" className='w-10/12 xl:ms-5 lg:ms-10 md:ms-5 sm:ms-16 ms-8 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-10/12' alt="" />
            </div>
            <div className='xl:pt-28'>
                <h1 className='font-sans font-bold text-2xl uppercase ps-5'>Blog post</h1>
                <p className='text-justify xl:pe-24 lg:pe-24 md:pe-24 sm:pe-10 pe-5 ps-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quae cupiditate eum temporibus magni odit ex nostrum assumenda in quaerat, tempora similique ad! Ullam enim quidem, vero inventore voluptate minima.
                Sequi corporis quidem quia pariatur eius suscipit quod possimus, fugiat perferendis deserunt molestiae laborum, porro voluptate sit fugit saepe maiores expedita amet earum in itaque. Voluptas inventore blanditiis accusantium iusto.
                Enim quae eligendi nobis accusantium iste veniam sit ipsa ipsam reiciendis vero cum vitae ullam consequuntur pariatur, repellendus temporibus corporis adipisci dolorem nulla error, molestias expedita! Totam eveniet aspernatur ullam.</p>
            </div>
        </div>
    </section>
  )
}

export default Blog
