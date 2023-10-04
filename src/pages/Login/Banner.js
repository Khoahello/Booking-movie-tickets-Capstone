import React from 'react'
import bgAnimate from "./animation_lmwcs3q1.json"
import Lottie from 'lottie-react'

export default function Banner() {
  return (
    <div className='w-1/3'>
      <Lottie animationData={bgAnimate} loop={false} />;
    </div>
  )
}
