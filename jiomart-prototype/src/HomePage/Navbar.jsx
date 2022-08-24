import React from 'react'
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import '../App.css';


const Navbar = () => {
  return (
    <>
    <WrapNavbar>
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

      </WrapNavbar>

    </>
  )
}

export default Navbar;

export const WrapNavbar=styled.div`
height:2rem;
width:85.2.01rem;
background-color:#f3f3f3;
font-family:Jio-Light;

 a{
    text-decoration: none;
  }

  .main-header{
    display: flex;
    margin:auto;
    justify-content:space-around;
    
  }

  .dropdown {
    display:flex;
    position: relative;
    width:8.2rem;
    height:2.2rem;
    
  }

  .location{
    fontSize:"1.5rem",
    height:auto,
    width:1rem; 
    margin:"auto",
  }

  .deliver{
    height:2.1rem;
    width:6rem;
    margin:auto;
  }
  .write{
    height:0.6rem;
  }

  .dropbtn {
    background-color: #ececed;
    color: black;
    width:auto;
    font-size: 0.8rem;
    font-family: Avenir-Next,sans-serif;
    padding-top:0.2rem;
    font-weight:600;
  }
  
  .downkey:hover{
    transition: transform 0.4s;
    transform: rotate(180deg) translateY(-0.1px) translateX(-0.1rem);      
}

  .dropdown-content {
    display: none;
    margin-top: 2.2rem;
    position: absolute;
    background-color: #ececed;
    width: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 1;
    padding:1.2rem;
  }
  
  a{
    text-decoration: none;
  }
 
  .dropdown-content a {
    color: black;
    padding: 1rem 1rem;
    text-decoration: none;
    display: block;
    z-index: 2;
  }
  .flex-content{
  display:flex;
  gap:50px;
  font-size: 3rem;
  color: black;
  font-weight: lighter;
  line-height: normal;
  z-index: 3;
  }
  
  li{
    list-style: none;
    font-weight:500;
    height:2.5rem;
    width:14rem;
    border:1px solid red;
    font-size:1rem;
    color:#000;
  }

  li:hover {
    background-color: white;
    color:#008ecc;
  }

  .dropdown-content a:hover {background-color: white;}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  

  

  }
`