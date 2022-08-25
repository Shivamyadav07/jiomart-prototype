import React from 'react'
import {Link} from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-section'>

        <div className="container">
                <div className="row">
                    <div className='footer'>
                    <div className="footer-col">
                        <h4>MOST POPULAR CATEGORIES</h4>
                        <ul style={{fontSize:"0.3rem"}}>
                            <li><Link to="/">Staples</Link></li>
                            <li><Link to="/">Beverages</Link></li>
                            <li><Link to="/">Personal Care</Link></li>
                            <li><Link to="/">Home Care</Link></li>
                            <li><Link to="/">Fruits and Vegetables</Link></li>
                            <li><Link to="/">Baby Care</Link></li>
                            <li><Link to="/">Snacks & Branded Foods</Link></li>
                            <li><Link to="/">Dairy & Bakery</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col right">
                        <h4>CUSTOMER SERVICES</h4>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                            <li><Link to="/">Service Policy</Link></li>
                            <li><Link to="/">E-waste Policy</Link></li>
                        </ul>
                    </div>
                    </div>
                        
                    <div style={{display:"flex", width:"25rem"}}>
                    <div className='line1'></div>
                    <div className="footer-col-right1" style={{marginLeft:"1rem"}}>
                        <h4 style={{marginBottom:"0.6rem",color:"#000"}}>CONTACT US</h4>
                        <p>WhatsApp us: <span style={{display:"inline-block"}}><Link to="">86210 39926</Link></span></p>
                        <p>Call Us : <span style={{display:"inline-block"}}><Link to="">1800 890 1222</Link></span> <br/>
                            8:00 AM to 8:00 PM, 365 days</p>
                        <p>Please note that you are accessing the BETA Version of 
                            <Link to="www.jiomart.com"style={{fontWeight: "100"}}>www.jiomart.com</Link> </p>
                        <p>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing
                            errors or other problems on the beta website, please email us on
                             <span><Link to="cs@jiomart.com">cs@jiomart.com</Link></span></p>
                        <h4>DOWNLOAD NOW</h4>
                        <div style={{display:"flex"}}>
                        <Link to="https://play.google.com/store/apps/details?id=com.jpl.jiomart"
                            style={{marginRight: "16px"}}>
                                <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                                alt="Download Jiomart App for Android from Play Store"/></Link>
                        <Link to="https://apps.apple.com/in/app/jiomart/id1522085683">
                            <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                                alt="Download Jiomart App for iOs from App Store"/></Link>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
               </div>

            <div className="bottom">
                <div className="last">
                    <div className='sideleft'>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</div>
                    <div className='sideright'>© 2021 All rights reserved. Reliance Retail Ltd.</div>
                </div>
            </div>
            
            </div>

    </div>
  )
}

export default Footer;