import React from 'react'
import styled from 'styled-components'
import DehazeIcon from '@mui/icons-material/Dehaze';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
// import SearchBar from './SearchBar';

const Header = () => {
  return (
   
<WrapHeader>
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
        </WrapHeader>
   
  )
}

export default Header;

export const WrapHeader=styled.div`
background-color: #008ecc;


.navbar {
    display: grid;
    grid-template-columns: 7rem 7rem 52rem 10rem 8rem;
    align-items: center;
    text-align: center;
    color: white;
    min-height:4.2rem;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #008ecc;

}
.menu{
    margin-left:4rem;
    height:3rem;
    font-size: 2rem;
    cursor: pointer;
}

.nameLogo {
    height:3rem;
}

.jio{
    font-weight:700;
    height:1.8rem;
    font-size:1.6rem;
}

.beta{
    font-size:0.7rem;
    margin-left:4rem;
    font-weight:600;
}

.searchItem {
    outline-style: none;
}

.navbar .navinnerdiv>div {
    display: inline-block;
    vertical-align: top;
}

.navicon {
    cursor: pointer;
}

.navbar .navText {
    font-size:0.8rem;
    font-weight: 600;
    margin-left:0.1rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.signU{
  
    margin-top:0.3rem;
}
.navbar input {
    width: 50rem;
    height: 2.3rem;
    border-radius: 0.3rem;
    border: none;
    padding-left: 1rem;
}

`


