import React from 'react'
import {Link} from "react-router-dom";
import styles from "../HomePage/HomePageCss/Footer.module.css";
import {
    Text,
    Stack,
  } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className={styles.footersection}>

        <div className={styles.footerbox}>
                <div className={styles.footrow}>
                    <div className={styles.foot}>
                    <div className={styles.footcol}>
                
                        <Text lineHeight='2rem' fontSize="lg"> MOST POPULAR CATEGORIES</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Staples</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Beverages</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Personal Care</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Home Care</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Fruits and Vegetables</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Baby Care</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Snacks & Branded Foods</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Dairy & Bakery</Text>
                    </div>
                    <div className={styles.footright}>
                    
                        <Text lineHeight='2rem' fontSize="lg" >CUSTOMER SERVICES</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">About Us</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">FAQ</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Terms & Conditions</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">Service Policy</Text>
                        <Text lineHeight='2rem' fontSize="sm" color="gray" fontWeight="200">E-waste Policy</Text>
                      
                    </div>
                    </div>
                        
                    <div style={{display:"flex", width:"25rem"}}>
                    
                    <div className={styles.line1}></div>

                    <div className={styles.footercolright} 
                         style={{marginLeft:"2rem"}}>
                        <Text lineHeight='2.8rem' fontSize="lg" >CONTACT US</Text>

                    <Stack direction='row' lineHeight='2.8rem'>
                    <Text fontSize="sm" color='gray' fontWeight="gray.100">WhatsApp us :</Text>
                    <Text fontSize="sm" color='#008ecc' as='u' fontWeight="#008ecc.300">70003 70003</Text>
                    </Stack>

                    <Stack direction='row'>
                    <Text fontSize="sm" color='gray' fontWeight="gray.300">Call us :</Text>
                    <Text fontSize="sm" color='#008ecc' as='u' fontWeight="#008ecc.300">1800 890 1222</Text>
                    </Stack>
                    <Text fontSize="sm"color='gray' marginBottom='3' fontWeight="gray.300">8:00 AM to 8:00 PM, 365 days</Text>
                     
                    <Text fontSize="sm" color='gray'
                     fontWeight="gray.300">Please note that you are accessing the</Text>
                    <Stack direction='row' marginBottom='3'>
                    <Text fontSize="md" color='gray' fontWeight="gray.300">  BETA version of </Text>
                    <Text fontSize="md"  color='#008ecc' as='u' fontWeight="#008ecc.300">www.jiomart.com</Text>
                    </Stack>
           
                    <Text fontSize="sm" color='gray' fontWeight="gray.300">
                        Should you encounter any bugs, glitches, 
                        lack of functionality, delayed deliveries, billing
                       errors or other problems on the beta website, please email us on</Text>
                    <Text fontSize="md"  color='#008ecc' as='u' fontWeight="#008ecc.300">cs@jiomart.com</Text>  

                  
                    <Text lineHeight='2.8rem' fontSize="lg" color='black' fontWeight="350">DOWNLOAD APP</Text>

                  <Stack direction='row' marginBottom='10'>
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                                alt="Download Jiomart App for Android from Play Store"/>
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                                alt="Download Jiomart App for iOs from App Store"/>
                 </Stack> 
                    </div>
                </div>
               </div>

            <div className={styles.bottom}>
                <div className={styles.last}>
                <Stack direction='row' spacing='28rem' marginLeft='3rem' marginBottom='3'>
                    <Text fontSize="sm" color='black' fontWeight="200">Best viewed on Microsoft Edge 81+, 
                    Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</Text>
                    <Text fontSize="sm"  color='black'  fontWeight="200">
                    © 2021 All rights reserved. Reliance Retail Ltd.
                    </Text>
                    </Stack>
                </div>
                
            </div>
            
     </div>

    </div>
  )
}

export default Footer;