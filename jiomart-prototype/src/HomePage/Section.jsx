import React from 'react'
import styles from "../HomePage/HomePageCss/Section.module.css";
import { posterimg } from '../data';
import { mensdata } from '../data';
import { BigMenData } from '../data';
import { KidsFashion } from '../data';
import { HottestDeals } from '../data';
import {groceries} from '../data';
import MultipleSlide from './Slide/MultipleSlide';

const Section = () => {

  return (
    <div className={styles.belowSlider}>
       <div className={styles.off}>
         <img className={styles.imgie} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" alt=""/>
         <img className={styles.imgie} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660920053_Aug-20_Slim_web.jpg" alt=""/>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661362638_Desktop-DOTD-25th-Camp-A.jpg" alt=""/>
       </div>
       


       <div className={styles.vicks}>
        <img className={styles.imgvick} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" alt=""/>
       </div>


       <div className={styles.topDeals}>
           <MultipleSlide/>
       </div>

       <div className={styles.groceries}>
       <h3 class={styles.text}>Top Groceries</h3>

     <div className={styles.groceriesD}>
            {groceries.map((grow)=> (
              <div className='deal'>
                  <img style={{border:"1rem"}}
                  src={grow.image} alt={grow.n} />
                </div>
            ))}
       </div>
     </div>




       <div className={styles.hotest}>
       <h3 class={styles.text}>Hotest Deals</h3>

     <div className={styles.hotestD}>
            {HottestDeals.map((deals)=> (
              <div className='deal'>
                  <img style={{borderRadius:"0.5rem"}}
                  src={deals.image} alt={deals.n} />
                </div>
            ))}
       </div>
     </div>


       <div className={styles.kidssmall}>
       <h3 class={styles.text}>Kid's Fashion</h3>

     <div className={styles.kidsfashion}>
            {KidsFashion.map((kids)=> (
              <div className={styles.kids}>
                  <img style={{borderRadius:"0.5rem"}}
                  src={kids.image} alt={kids.n} />
                </div>
            ))}
       </div>
     </div>


       <div className={styles.menimg}>
        <h3 class={styles.text}>Mens Fashion</h3>
       <div className={styles.menf}>
            {BigMenData.map((post)=> (
              <div className='post'>
                  <img style={{borderRadius:"0.5rem"}}
                  src={post.image} alt={post.n} />
                </div>
            ))}
       </div>
    </div>



     <div className={styles.menssmall}>
     <div className={styles.mensfashion}>
            {mensdata.map((pro)=> (
              <div className={styles.fashion}>
                  <img style={{borderRadius:"0.5rem"}}
                  src={pro.img} alt={pro.n} />
                </div>
            ))}
       </div>
     </div>


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

<div>
</div>

    </div>
  )
}

export default Section;










// const GraphicDesign = () => {
//   return (
//     <div>
//       <br/>
//       <br/>
//         <AyushSlide list={ayusharr} number={5}/>
//         <br/>
//         <br/>

//     <SDetails/>
    
//     </div>
//   )
// }

// export default GraphicDesign;

