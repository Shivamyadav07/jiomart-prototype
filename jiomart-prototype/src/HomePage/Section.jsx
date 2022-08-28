import React from 'react'
import styles from "../HomePage/HomePageCss/Section.module.css";
import { BigWomenData, downData, HomeData, Offer, Personal, posterimg, SmallWomenData } from '../data';
import { mensdata } from '../data';
import { BigMenData } from '../data';
import { KidsFashion } from '../data';
import { HottestDeals } from '../data';
import {groceries} from '../data';
import MultipleSlide from './Slide/MultipleSlide';
import Sliding from './Slide/Sliding';
import ShopCategory from './Slide/ShopCategory';
import Category from './Slide/Category';
import Footer from './Footer';
import {Link} from 'react-router-dom';


const Section = () => {

  return (
    <div className={styles.belowSlider}>
       <div className={styles.off}>
         <img className={styles.imgie} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" alt=""/>
         <img className={styles.imgie} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660920053_Aug-20_Slim_web.jpg" alt=""/>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661362638_Desktop-DOTD-25th-Camp-A.jpg" alt=""/>
       </div>
       
       <ShopCategory/>

       <div className={styles.vicks}>
        <img className={styles.imgvick} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" alt=""/>
       </div>


       <div className={styles.topDeals}>
        <h3 class={styles.text}>Top Deals</h3>
           <MultipleSlide/>   
       </div>

       <div className={styles.Slit}>
          <Sliding/>
       </div>

<Link to='/groceries'>
       <div className={styles.groceries}>
       <h3 class={styles.text}>Offers on daily essentials</h3>

       <div className={styles.groceriesD}>
            {groceries.map((grow)=> (
              <div className='deal'>
                <div className={styles.Choco}>
                  <img className={styles.groom} style={{border:"1rem"}}
                  src={grow.image} alt={grow.n}/>
                  </div>
                </div>
            ))}
       </div>
     </div>
     </Link>
      
      <div>
        <Category/>
      </div>

<Link to="/fashion">
      <div className={styles.menimg}>
        <h3 class={styles.text}>Womens Fashion</h3>
       <div className={styles.menf}>
            {BigWomenData.map((wom)=> (
              <div className='post'>
                  <img className={styles.moon} style={{borderRadius:"0.5rem"}}
                  src={wom.image} alt={wom.n} />
                </div>
            ))}
       </div>
    </div>
    </Link>
     
     <Link to="/fashion">
    <div className={styles.menssmall}>
     <div className={styles.mensfashion}>
            {SmallWomenData.map((women)=> (
              <div className={styles.fashion}>
                  <img className={styles.dhoom} style={{borderRadius:"0.5rem"}}
                  src={women.image} alt={women.n} />
                </div>
            ))}
       </div>
     </div>
     </Link>


     <div className={styles.posterimg}>
       <div className={styles.abovefooter}>
            {posterimg.map((poster)=> (
              <div className={styles.poster}>
                  <img className={styles.mmm}
                  src={poster.img} alt={poster.n} />
                </div>
            ))}
       </div>
    </div>

  <Link to="groceries">
    <div className={styles.groceries}>
       <h3 class={styles.text}>Offers on Household and Personal Care</h3>
       <div className={styles.groceriesD}>
            {Personal.map((grow)=> (
              <div className='deal'>
                <div className={styles.Creamy}>
                  <img className={styles.groom} style={{border:"1rem"}}
                  src={grow.image} alt={grow.n}/>
                  </div>
                </div>
            ))}
       </div>
     </div>
     </Link>


     <div className={styles.posterimg1}>
       <div className={styles.abovefooter}>
            {HomeData.map((home)=> (
              <div className={styles.poster}>
                  <img className={styles.mmm}
                  src={home.image} alt={home.n} />
                </div>
            ))}
       </div>
    </div>


    <Link to='/groceries'>
    <div className={styles.groceries}>
       <h3 class={styles.text}>Offers on Household and Personal Care</h3>
       <div className={styles.groceriesD}>
            {Offer.map((offer)=> (
              <div className='deal'>
                <div className={styles.Creamy}>
                  <img className={styles.groom} style={{border:"1rem"}}
                  src={offer.image} alt={offer.n}/>
                  </div>
                </div>
            ))}
       </div>
     </div>
     </Link>



       <div className={styles.hotest}>
       <h3 class={styles.text}>Hotest Deals</h3>

     <div className={styles.hotestD}>
            {HottestDeals.map((deals)=> (
              <div className='deal'>
                  <img className={styles.zoom} style={{borderRadius:"0.5rem"}}
                  src={deals.image} alt={deals.n} />
                </div>
            ))}
       </div>
     </div>

<Link to='/fashion'>
       <div className={styles.kidssmall}>
       <h3 class={styles.text}>Kid's Fashion</h3>

     <div className={styles.kidsfashion}>
            {KidsFashion.map((kids)=> (
              <div className={styles.kids}>
                  <img className={styles.boom} style={{borderRadius:"0.5rem"}}
                  src={kids.image} alt={kids.n} />
                </div>
            ))}
       </div>
     </div>
     </Link>

<Link to='/fashion'>
       <div className={styles.menimg}>
        <h3 class={styles.text}>Mens Fashion</h3>
       <div className={styles.menf}>
            {BigMenData.map((post)=> (
              <div className='post'>
                  <img className={styles.moon} style={{borderRadius:"0.5rem"}}
                  src={post.image} alt={post.n} />
                </div>
            ))}
       </div>
    </div>
    </Link>

  <Link to="/fashion">
    <div className={styles.menssmall}>
     <div className={styles.mensfashion}>
            {mensdata.map((pro)=> (
              <div className={styles.fashion}>
                  <img className={styles.dhoom} style={{borderRadius:"0.5rem"}}
                  src={pro.img} alt={pro.n} />
                </div>
            ))}
       </div>
     </div>
     </Link>

     <div className={styles.posterimg3}>
       <div className={styles.abovefooter}>
            {downData.map((downdata)=> (
              <div className={styles.poster}>
                  <img className={styles.mmm}
                  src={downdata.image} alt={downdata.n} />
                </div>
            ))}
       </div>
    </div>

<div>
</div>
    <Footer/>
    </div>
  )
}

export default Section;












