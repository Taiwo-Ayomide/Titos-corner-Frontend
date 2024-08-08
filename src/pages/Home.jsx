import React from 'react'
import Advert from '../components/Advert'
import About from '../components/About'
import Audio from '../components/Audio'
import Blog from '../components/Blog'
import Recipe from '../components/Recipe'
import Footer from '../components/Footer'
import Sign from '../components/Sign'

const Home = () => {
  return (
    <div>
        <Advert />
        <About />
        <Audio />
        <Blog />
        <Recipe />
        <Footer />
        <Sign />
    </div>
  )
}

export default Home
