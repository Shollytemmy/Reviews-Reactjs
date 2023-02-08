import React, { useState } from 'react'
import reviews from '../../data'
import {FaQuoteRight} from 'react-icons/fa'

export const Reviews = () => {
  const [index,  setIndex]  = useState(0)
  const {id, name, job, image, text} = reviews[index]
  console.log(id, name, job,)
  return (
    <section className='section'>
      <div className='img-div'>
        <img src={image} alt="" />
        <span>
          <FaQuoteRight />
        </span>
      </div>

    </section>
  )
}
