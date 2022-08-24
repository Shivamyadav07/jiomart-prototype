import React,{useState} from 'react'
import styled from 'styled-components';
import BtnSlider from './BtnSlider';
import { v4 as uuidv4 } from "uuid";

const Slider = () => {
 
const [slideIndex, setSlideIndex] = useState(1)

const dataSlider = [
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem"
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
  ];
  

const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === dataSlider.length){
        setSlideIndex(1)
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(dataSlider.length)
    }
}

const moveDot = index => {
    setSlideIndex(index)
}

return (
    <WrapSlider>
    <div className="container-slider">
        {dataSlider.map((obj, index) => {
            return (
                <div
                key={obj.id}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                    <img 
                    src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                    />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 10}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>

    </div>
    </WrapSlider>
  )
}

export default Slider

export const WrapSlider=styled.div`
.container-slider {
    max-width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 100%){
    .container-slider {
      margin: 2rem 0.9rem 0;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
  }
   
  .prev {
    top: 50%;
    left:0.1rem;
    border-radius: 0 0.3rem 0.3rem 0;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 0.1rem;
    border-radius: 0.3rem 0 0 0.3rem;
    transform: translateY(-60%);
  }
  
  
  .container-dots {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 0.2rem;
    background: #f1f1f1;
  }
  .dot.active {
    background: rgb(32, 32, 32);
  }
`
