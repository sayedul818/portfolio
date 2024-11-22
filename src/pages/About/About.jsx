import React, { useEffect, useState } from 'react'
import Service from './Service'
import Testimonial from './Testimonial';
const serviceData=
[
    {
      "title": "Web design",
      "icon": "/image/icon-design.svg",
      "description": "The most modern and high-quality design made at a professional level."
    },
    {
      "title": "Web development",
      "icon": "/image/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Mobile apps",
      "icon": "/image/icon-app.svg",
      "description": "Professional development of applications for iOS and Android."
    },
    {
      "title": "Photography",
      "icon": "/image/icon-photo.svg",
      "description": "I make high-quality photos of any category at a professional level."
    }
  ]
  

const About = () => {
  const [testimonials,setTestimonials]=useState([]);
  useEffect(()=>{
    fetch('testimonials.json')
    .then(res=>res.json())
    .then(data=>setTestimonials(data))
  },[])
  return (
    <div className='about active'>
      <header>
        <h2 className='h2 article-title'>About me</h2>
      </header>
      <section className='about-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deserunt perspiciatis, quia earum et molestiae dolorem officiis ea pariatur delectus quam aspernatur, explicabo sapiente? Repellendus saepe sed beatae minus neque.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum, modi placeat iusto exercitationem pariatur porro ex ea fuga dolores officia temporibus voluptatum ullam eius incidunt cum possimus aliquid quisquam.
        </p>
      </section>

      {/* services */}
      <section className='service'>
          <h2 className='h3 service-title'> What I'm  Doing</h2>
          <ul className='service-list'>
            {
              serviceData.map((service,index)=>(
                <Service key={index} title={service.title} icon={service.icon} description={service.description}></Service>
              ))
            }
          </ul>
      </section>

      {/* testimonials */}
      <section className='testimonials'>
          <h3 className='h3 testimonials-title'>Testimonials</h3>
          <ul className='testimonials-list has-scrollbar'>
            {
              testimonials.map((testimonial,index)=>(
                <Testimonial key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}></Testimonial>
              ))
            }
          </ul>
      </section>
      
    </div>
  )
}

export default About