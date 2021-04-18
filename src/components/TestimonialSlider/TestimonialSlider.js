import React, { useRef, useState, useEffect } from 'react';
import './TestimonialSlider.scss'
import { Testimonals } from './Testimonials'

const TestimonialSlider = () =>  {




  
  
  
  
  
  const [clicked, setClicked] = useState(Testimonals[0]);
  // const [auto, setAuto] = useState (true);
  
  const switchTestimonial = index => {
    setClicked(index)
  }
  
  
  // const timerRef = useRef(null);
  
  // useEffect(() => {
  //   if(timerRef.clicked){
  //     clearTimeout(timerRef.clicked);
  //   }
  //   timerRef.current = setTimeout(() =>{
  //     if (auto){
  //       setClicked( index => Testimonals[index] );
  //       }
  //     }, 5000);
  //   return () =>  clearTimeout(timerRef.clicked);
  // }, [clicked]);

  

    
    return (
      <div className="testimonialCarousel">

        <h3>Testimonials</h3>


        
        <div className = 'testimonialBox' >
          <p> 
            {clicked.testimonial} {clicked.name}
          </p>
        </div>
           



        <div className = 'barsBox'>
          {Testimonals.map((index) =>{
            return(
                <div className = {clicked === index ? "box activeBox" : "box"} onClick = {() => switchTestimonial(index) } key = {index}></div>
              )})}
        </div>



        
          
      </div>
    );
  }


export default TestimonialSlider