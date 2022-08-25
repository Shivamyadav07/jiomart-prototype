import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Style from "./Home.Module.css";



const AyushSlide = ({list,number}) => {
    const properties1 = {
      slidesToShow:{number},
        slidesToScroll: 4,
        autoplay: false,
        indicators: true,
        transitionDuration: 100,
           responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: number,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      ]
      }
  return (
    <div>
        <Slide id={Style.na} {...properties1} >
        {list.map((el) => {
          return (
            <div  id={Style.w1} >
              <div className={Style.q2} id={Style.t}>
                {/* <img src={el} alt="no" style={{height:"25rem",width:"17rem"}}/> */}
                <img src={el} alt="no" style={{height:"15rem",width:"11rem"}}/>

              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  )
}

export default AyushSlide