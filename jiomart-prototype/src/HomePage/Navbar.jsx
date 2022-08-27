import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {ChevronDownIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import styles from "./HomePageCss/Navbar.module.css";

const Navbar = () => {
  return (
   
<div className={styles.navStart}>
      <div className={styles.mainnav}>
        <div className={styles.dropdown}>
          <div className={styles.location}>
            <LocationOnIcon/>
           </div>
        <div className={styles.deliver}>
            <p className={styles.write} style={{paddingBottom:"0.8rem",color:"gray"}}>Deliver to</p>
            <p className={styles.write} style={{fontSize:"0.9rem",fontWeight:"600"}}>400205</p>
        </div>
        </div>

        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Groceries </Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
               <li className={styles.oneby}>Fruits & Vegetables</li>
               <li className={styles.oneby}>Dairy & Bakery</li>
               <li className={styles.oneby}>Staples</li>
               <li className={styles.oneby}>Snacks & Branded Foods</li>
               <li className={styles.oneby}>Beverages</li>
               <li className={styles.oneby}>Personal Care</li>
              </div>
        
              <div className={styles.size1}>
              <li className={styles.oneby}>Home Care</li>
                <li className={styles.oneby}>Home & Kitchen</li>
                <li className={styles.oneby}>Mom & Baby Care</li>
                <li className={styles.oneby}>Books</li>
                <li className={styles.oneby}>Pets</li>
              </div>
              
            </div>
          </div>
        </div>



        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Premium Fruits</Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
               <li className={styles.oneby}>Apples & Pears</li>
               <li className={styles.oneby}>Avocado,Peach,Plum</li>
               <li className={styles.oneby}>Banana,Melons & Coconuts</li>
               <li className={styles.oneby}>Cherries,Berries & Exotic</li>
               <li className={styles.oneby}>Fruits</li>
               <li className={styles.oneby}>Citrus,Mango & Grapes</li>
              </div>
        
              <div className={styles.size1}>
                <li className={styles.oneby}>Gift</li>
                <li className={styles.oneby}>Gift, Assorted & XL</li>
                <li className={styles.oneby}>Pomegranate, Papaya &</li>
                <li className={styles.oneby}>Pineapple</li>
                <li className={styles.oneby}>Seasonal & Minor Fruits</li>
                <li className={styles.oneby}>Premium Fruits</li>
              </div>
              
            </div>
          </div>
        </div>
      
        
        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Home & Kitchen</Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
               <li className={styles.oneby}>Kitchenware</li>
               <li className={styles.oneby}>Dining</li>
               <li className={styles.oneby}>Furnishing</li>
               <li className={styles.oneby}>Home Decor</li>
               <li className={styles.oneby}>Furniture</li>
               <li className={styles.oneby}>Home Appliances</li>
               <li className={styles.oneby}>Toys, Games & Fitness</li>
               <li className={styles.oneby}>Electrical</li>
               <li className={styles.oneby}>Bathroom & Laundry</li>
               <li className={styles.oneby}>Accessories</li>
               <li className={styles.oneby}>Disposables</li>
               <li className={styles.oneby}>Stationery</li>
               <li className={styles.oneby}>Bags & Travel Luggage</li>
              </div>
        
              <div className={styles.size1}>
               <li className={styles.oneby}>Mops, Brushes & Scrubs</li>
               <li className={styles.oneby}>Auto Care</li>
               <li className={styles.oneby}>Garden & Outdoor</li>
               <li className={styles.oneby}>Carpentry & work accessories</li>
               <li className={styles.oneby}>Pooja Needs</li>
               <li className={styles.oneby}>Bathroom & Laundry</li>
               <li className={styles.oneby}>Industrial & Scientific Supplies</li>
               <li className={styles.oneby}>Homes Safety & Automation</li>
               <li className={styles.oneby}>Kitchen & Bath Fixtures</li>
               <li className={styles.oneby}>Paint Wall Treatments &</li>
               <li className={styles.oneby}>Supplies</li>
               <li className={styles.oneby}>Power & Hand Tools</li>
              </div>
              
            </div>
          </div>
        </div>

        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Fashion</Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
               <li className={styles.oneby}>Men</li>
               <li className={styles.oneby}>Women</li>
               <li className={styles.oneby}>Boys</li>
               <li className={styles.oneby}>Girls</li>
               <li className={styles.oneby}>Junior Boys</li>
               <li className={styles.oneby}>Infants</li>
              </div>
              
            </div>
          </div>
        </div>


        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Electronics</Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
               <li className={styles.oneby}>Mobiles & Tablets</li>
               <li className={styles.oneby}>TV & Speakers</li>
               <li className={styles.oneby}>Home Appliances</li>
               <li className={styles.oneby}>Computers</li>
               <li className={styles.oneby}>Cameras</li>
               <li className={styles.oneby}>Kitchen Appliances</li>
               <li className={styles.oneby}>Personal Care & Grooming</li>
               <li className={styles.oneby}>Smart Devices</li>
               <li className={styles.oneby}>Gaming</li>
               <li className={styles.oneby}>Accessories</li>
               <li className={styles.oneby}>Phones</li>
               <li className={styles.oneby}>Office Products</li>
               <li className={styles.oneby}>Health Care Devices</li>
              </div>
              
            </div>
          </div>
        </div>


        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Beauty</Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
              <li className={styles.oneby}>Make-Up</li>
              <li className={styles.oneby}>Hair</li>
              <li className={styles.oneby}>Skin Care</li>
              <li className={styles.oneby}>Fragrances</li>
              <li className={styles.oneby}>Personal Care</li>
              <li className={styles.oneby}>Mom & Baby</li>
              <li className={styles.oneby}>Men's Grooming</li>
              <li className={styles.oneby}>Tools & Appliances</li>
              <li className={styles.oneby}>Wellness</li>
              <li className={styles.oneby}>Fitness</li>
              <li className={styles.oneby}>Ayush</li>
              <li className={styles.oneby}>Treatment</li>
              </div>
        
            </div>
          </div>
        </div>

        <div className={styles.dropdown}>
          <Link to="/" className={styles.dropbtn}>Jewellery</Link>
          <Link to="/" className={styles.downkey}><ChevronDownIcon/></Link>
          <div className={styles.dropdownContent}>
            <div className={styles.flexContent}>
              <div className={styles.size1}>
               <li className={styles.oneby}>Fine Jewellery</li>
            
              </div>
              
            </div>
          </div>
        </div>
        
  </div>

      </div>

  
  )
}

export default Navbar