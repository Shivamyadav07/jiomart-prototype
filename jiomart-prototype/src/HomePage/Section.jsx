import React from 'react'
import "./Slider.css";
import { posterimg } from '../data';
import { mensdata } from '../data';
import { BigMenData } from '../data';
import { KidsFashion } from '../data';
import { HottestDeals } from '../data';
import Footer from './Footer';

const Section = () => {

  return (
    <div className='belowSlider'>
       <div className='off'>
         <img className='img-s' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" alt=""/>
         <img className='img-s' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1660920053_Aug-20_Slim_web.jpg" alt=""/>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661362638_Desktop-DOTD-25th-Camp-A.jpg" alt=""/>
       </div>
       


       <div className='vicks'>
        <img className="img-vick" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" alt=""/>
       </div>


       <div className='top-Deals'>
           
       </div>

       <div className='hotest'>
       <h3 class="text">Hotest Deals</h3>

     <div className="hotest-deal">
            {HottestDeals.map((deals)=> (
              <div className='deal'>
                  <img style={{borderRadius:"0.5rem"}}
                  src={deals.image} alt={deals.n} />
                </div>
            ))}
       </div>
     </div>


       <div className='kids-small'>
       <h3 class="text">Kid's Fashion</h3>

     <div className="kids-fashion">
            {KidsFashion.map((kids)=> (
              <div className='kids'>
                  <img style={{borderRadius:"0.5rem"}}
                  src={kids.image} alt={kids.n} />
                </div>
            ))}
       </div>
     </div>


       <div className='men-img'>
        <h3 class="text">Mens Fashion</h3>
       <div className="men-f">
            {BigMenData.map((post)=> (
              <div className='post'>
                  <img style={{borderRadius:"0.5rem"}}
                  src={post.image} alt={post.n} />
                </div>
            ))}
       </div>
    </div>



     <div className='mens-small'>
     <div className="mens-fashion">
            {mensdata.map((pro)=> (
              <div className='fashion'>
                  <img style={{borderRadius:"0.5rem"}}
                  src={pro.img} alt={pro.n} />
                </div>
            ))}
       </div>
     </div>


     <div className='poster-img'>
       <div className="above-footer">
            {posterimg.map((poster)=> (
              <div className='poster'>
                  <img className='mmm'
                  src={poster.img} alt={poster.n} />
                </div>
            ))}
       </div>
    </div>

<div>
  <Footer/>
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

