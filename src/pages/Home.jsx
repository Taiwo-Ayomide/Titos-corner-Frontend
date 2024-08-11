import React from 'react'
import About from '../components/About'
import Audio from '../components/Audio'
import Blog from '../components/Blog'
import Recipe from '../components/Recipe'
import Footer from '../components/Footer'
import Sign from '../components/Sign'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Blog />
      <Recipe />
      <Audio />
      <Footer />
      <Sign />
    </div>
  )
}

export default Home
