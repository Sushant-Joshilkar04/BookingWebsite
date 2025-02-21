import ScrollVelocity from './ScrollVelocity';
  
import React from 'react'

const Scroll = () => {
  return (
    <div>
      <ScrollVelocity
  texts={['Book your Tickets Now!', 'Enjoy the Life 😎']} 
  velocity={100.5} 
  className="custom-scroll-text"
/>
    </div>
  )
}

export default Scroll
