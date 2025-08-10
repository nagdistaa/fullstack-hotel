import React from 'react'
import Hero from '../components/Hero'
import FeaturedDistination from '../components/FeaturedDistination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <FeaturedDistination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <Newsletter/>
    </div>
  )
}

export default HomePage