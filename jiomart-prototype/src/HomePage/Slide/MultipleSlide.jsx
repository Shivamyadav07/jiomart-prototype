import React from 'react'
import { Settings } from './settings';
import Slider from "react-slick";
import styles from "./Slide.module.css";
import { GrocerieSlider } from '../../data';
import {Link} from "react-router-dom";

const MultipleSlide = () => {
  return (
    <div>
      
      <div className={styles.productdiv}>
      
           <div className={styles.grow}>
           {GrocerieSlider.map((list)=> (
          
              <div className={styles.blow}>
                 <div className={styles.discountdiv}>
                     <p className={styles.discount}>33 % OFF</p>
                     <img className={styles.discountimg} src="https://i.ibb.co/Yd3ZVDg/badge.png" 
                     alt="badge" border="0" />
                 </div>
                   <img className={styles.reso} src={list.imgSrc} alt={list.n} />
                   <p className={styles.heading}>{list.heading}</p>
                   <p className={styles.price}>{list.price}</p>
                   <p className={styles.mrp}>{list.mrp}<> </></p>
                   <p className={styles.rupees}>{list.rupees}</p>
                   <p className={styles.save}>{list.save}</p>
                 <Link to="./Cart" >
                 <button className={styles.addtocart}>Add to cart
                   <img className={styles.add} src="https://i.ibb.co/QHDtjF4/plus.png" alt="plus" border="0" />
                 </button>
                   </Link>
           
              </div>
              
            ))}
      
           </div>
           
        <div>
        <Slider {...Settings}>{}</Slider>
          </div> 
      </div>
    </div>
  )
}

export default MultipleSlide