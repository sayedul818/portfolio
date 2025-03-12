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
        I am Sayedul Islam Sayed, a skilled MERN stack developer with a strong passion for building modern web applications. My expertise lies in React, where I excel in crafting dynamic, high-performance, and user-friendly interfaces.        
        </p>
        <p>
        With a deep understanding of front-end development, state management, and component-based architecture, I consistently deliver seamless and scalable solutions. My ability to integrate React with backend technologies makes me a valuable asset in full-stack development. Whether working on complex applications or optimizing UI/UX, I bring creativity and efficiency to every project. 🚀
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
      {/* clients logo */}
      <section className='clients'>
        <h3 className='h3 clients-title'>Clients</h3>
        <ul className='clients-list has-scrollbar'>
            <li className='clients-item'>
              <a href="#">
                <img src="image/logo-1-color.png" alt="" />
              </a>
            </li>
            <li className='clients-item'>
              <a href="#">
                <img src="image/logo-2-color.png" alt="" />
              </a>
            </li>
            <li className='clients-item'>
              <a href="#">
                <img src="image/logo-3-color.png" alt="" />
              </a>
            </li>
            <li className='clients-item'>
              <a href="#">
                <img src="image/logo-4-color.png" alt="" />
              </a>
            </li>
            <li className='clients-item'>
              <a href="#">
                <img src="image/logo-5-color.png" alt="" />
              </a>
            </li>
            <li className='clients-item'>
              <a href="#">
                <img src="image/logo-6-color.png" alt="" />
              </a>
            </li>
        </ul>
      </section>
      
    </div>
  )
}

export default About