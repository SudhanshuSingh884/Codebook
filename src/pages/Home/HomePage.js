import React from 'react'
import {Hero} from "./components/Hero";
import{FeaturedProducts} from "./components/Featuredproducts";
import {Testimonials} from "./components/Testimonials";
import {Faq} from "./components/Faq";
export const HomePage = () => {
  return (
    <main>
     <Hero/>
     <FeaturedProducts/>
     <Testimonials/>
     <Faq/>
    </main>
  )
}
  