import React from 'react'

const Testimonial = ({name,avatar,testimonial}) => {
  return (
    <li className='testimonials-item'>
        <div className='content-card'>
            <figure className='testimonials-avatar-box'>
                <img src={avatar} alt="" width='60' />
            </figure>
            <h4 className='h4 testimonials-item-title'>{name}</h4>
            <div>
                <p className='testimonials-text'>{testimonial}</p>
            </div>
        </div>
    </li>
  )
}

export default Testimonial