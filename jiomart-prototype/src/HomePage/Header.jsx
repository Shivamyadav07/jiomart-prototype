import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

import './Header.css';
// import SearchBar from './SearchBar';

const Header = () => {
  return (
   <div className="merge">
<div className="main">
<div className="navbar">
         <div className='menu'>
            <DehazeIcon style={{fontSize:"2rem"}}/>
        </div>

        <div className="nameLogo">
            <div className="jio">JioMart</div>
            <div className="beta">BETA</div>
        </div>

        <div>
            <input className="searchItem"
              placeholder="Search essential, groceries, and more..." />
        </div>

        <Link to="/">
        <div className="signIn navinnerdiv navicon">
            <PersonIcon style={{fontSize:"1.80rem"}}/>
            <div className="navText">
                <div className="signU">
                Sign In / Sign Up
                </div>  
            </div>
        </div>
        </Link>

        <Link to="/">
        <div className="cart navinnerdiv navicon">
            <ShoppingCartIcon/>
            <div className="navText">Cart</div>
        </div>
        </Link>
        </div>
        </div>
   



   <div className="Nav-start">
      <div className='main-header'>
        <div className="dropdown">
          <div className='location'>
            <LocationOnIcon/>
           </div>
        <div className='deliver' >
            <p className='write'  style={{paddingBottom:"0.8rem",color:"gray"}}>Deliver to</p>
            <p className='write' style={{fontSize:"0.9rem",fontWeight:"600"}}>400205</p>
        </div>
        </div>

        <div className="dropdown">
          <Link to="/" className="dropbtn" >Groceries </Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
               <li>Fruits & Vegetables</li>
               <li>Dairy & Bakery</li>
               <li>Staples</li>
               <li>Snacks & Branded Foods</li>
               <li>Beverages</li>
               <li>Personal Care</li>
              </div>
        
              <div className='size1'>
              <li>Home Care</li>
                <li>Home & Kitchen</li>
                <li>Mom & Baby Care</li>
                <li>Books</li>
                <li>Pets</li>
              </div>
              
            </div>
          </div>
        </div>



        <div className="dropdown">
          <Link to="/" className="dropbtn" >Premium Fruits</Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
               <li>Apples & Pears</li>
               <li>Avocado,Peach,Plum</li>
               <li>Banana,Melons & Coconuts</li>
               <li>Cherries,Berries & Exotic</li>
               <li>Fruits</li>
               <li>Citrus,Mango & Grapes</li>
              </div>
        
              <div className='size1'>
                <li>Gift</li>
                <li>Gift, Assorted & XL</li>
                <li>Pomegranate, Papaya &</li>
                <li>Pineapple</li>
                <li>Seasonal & Minor Fruits</li>
                <li>Premium Fruits</li>
              </div>
              
            </div>
          </div>
        </div>
      
        
        <div className="dropdown">
          <Link to="/" className="dropbtn" >Home & Kitchen</Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
               <li>Kitchenware</li>
               <li>Dining</li>
               <li>Furnishing</li>
               <li>Home Decor</li>
               <li>Furniture</li>
               <li>Home Appliances</li>
               <li>Toys, Games & Fitness</li>
               <li>Electrical</li>
               <li>Bathroom & Laundry</li>
               <li>Accessories</li>
               <li>Disposables</li>
               <li>Stationery</li>
               <li>Bags & Travel Luggage</li>
              </div>
        
              <div className='size1'>
               <li>Mops, Brushes & Scrubs</li>
               <li>Auto Care</li>
               <li>Garden & Outdoor</li>
               <li>Carpentry & work accessories</li>
               <li>Pooja Needs</li>
               <li>Bathroom & Laundry</li>
               <li>Industrial & Scientific Supplies</li>
               <li>Homes Safety & Automation</li>
               <li>Kitchen & Bath Fixtures</li>
               <li>Paint Wall Treatments &</li>
               <li>Supplies</li>
               <li>Power & Hand Tools</li>
              </div>
              
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/" className="dropbtn" >Fashion</Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
               <li>Men</li>
               <li>Women</li>
               <li>Boys</li>
               <li>Girls</li>
               <li>Junior Boys</li>
               <li>Infants</li>
              </div>
              
            </div>
          </div>
        </div>


        <div className="dropdown">
          <Link to="/" className="dropbtn" >Electronics</Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
               <li>Mobiles & Tablets</li>
               <li>TV & Speakers</li>
               <li>Home Appliances</li>
               <li>Computers</li>
               <li>Cameras</li>
               <li>Kitchen Appliances</li>
               <li>Personal Care & Grooming</li>
               <li>Smart Devices</li>
               <li>Gaming</li>
               <li>Accessories</li>
               <li>Phones</li>
               <li>Office Products</li>
               <li>Health Care Devices</li>
              </div>
              
            </div>
          </div>
        </div>


        <div className="dropdown">
          <Link to="/" className="dropbtn" >Beauty</Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
              <li>Make-Up</li>
              <li>Hair</li>
              <li>Skin Care</li>
              <li>Fragrances</li>
              <li>Personal Care</li>
              <li>Mom & Baby</li>
              <li>Men's Grooming</li>
              <li>Tools & Appliances</li>
              <li>Wellness</li>
              <li>Fitness</li>
              <li>Ayush</li>
              <li>Treatment</li>
              </div>
        
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/" className="dropbtn" >Jewellery</Link>
          <Link to="/" className='downkey'><KeyboardArrowDownIcon/></Link>
          <div className="dropdown-content">
            <div className="flex-content">
              <div className='size1'>
               <li>Fine Jewellery</li>
            
              </div>
              
            </div>
          </div>
        </div>
        
  </div>

      </div>



      </div>
  )
}

export default Header;


