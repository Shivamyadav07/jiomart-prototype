import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataSeller} from "../../src/data";


const SimpleSlider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <div>

<Slider {...settings}>
        {dataSeller.map((item)=>(
        <div className='card'>
           <div className='card-top'>
              <img src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
           </div>
           <div className='card-bottom'>
            <h3>{item.price}</h3>
            <h3>{item.mrp}</h3>
            <p>{item.save}</p>
           </div>
        </div>
       ))}
          
        </Slider>

    </div>
  )
}

export default SimpleSlider