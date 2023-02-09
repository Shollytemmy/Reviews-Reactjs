import React, { useState } from 'react'
import reviews from '../../data'
import {FaQuoteRight} from 'react-icons/fa'
import {FaAngleLeft} from "react-icons/fa"
import { FaAngleRight } from 'react-icons/fa'

export const Reviews = () => {
  const [index,  setIndex]  = useState(0)
 

  const {id, name, job, image, text} = reviews[index]
 

  const checkIndex = (index) => {
    if(index > reviews.length - 1){
      return 0;
    }

    if(index < 0){
      return reviews.length - 1;
    }

    return index

  }


  const handleNext = () => {
    
    setIndex((prev) => {
      let newIdx =  prev + 1
      return checkIndex(newIdx)
     
    })

  }

  const handlePrev = () => {
    
     setIndex((prev) => {
      let newIdx = prev - 1
      return checkIndex(newIdx)
     })

     
    
  }

  const generateRandomReviews = () => {

    let randomReviews = Math.floor(Math.random() * reviews.length)
    if(randomReviews === index){
      return randomReviews + 1
    }

    return setIndex(checkIndex(randomReviews))

     }
  return (
    <section className='section'>
      <div className='img-div'>
        <img src={image} alt="" />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='name'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='text'>{text}</p>

      <div className="btn-wrapper">
        <button className='btn-left btn' onClick={handlePrev}>
          <FaAngleLeft />
        </button>

        <button className='btn-left btn' onClick={handleNext}>
          <FaAngleRight />
        </button>
      </div>

      <div className="generate-rand">
        <button className='suprise-btn' onClick={generateRandomReviews}>Suprise</button>
      </div>

    </section>
  )
}
