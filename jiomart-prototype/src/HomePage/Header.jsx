import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import GroceriesData from "../HomePage/Search/data.json";
import SearchBar from './Search/SearchBar';
import styles from "../HomePage/HomePageCss/Header.module.css";
import SideBar from './Sidebar';

const Header = () => {
  return (
 
<div className={styles.main}>
<div className={styles.navbar}>
         <div className={styles.menu}>
            <SideBar/>
        </div>

        <div className={styles.nameLogo}>
            <div className={styles.jio}>JioMart</div>
            <div className={styles.beta}>BETA</div>
        </div>

        <div className={styles.seesaw}>
            <SearchBar  data={GroceriesData} />
        </div>

       <div className={styles.side} style={{marginRight:"3rem"}}>
        <Link to="/login">
        <div className={styles.navicon}>
            <PersonIcon style={{fontSize:"1.8rem"}} />
            <div className={styles.navText}
            style={{marginBottom:"0.7rem"}}>
                Sign In / Sign Up
            </div>
        </div>
        </Link>

        <Link to="/cart">
        <div className={styles.mycart}>
            <ShoppingCartIcon style={{fontSize:"1.8rem"}}/>        
            <div className={styles.navText}>Cart</div>
        </div>
        </Link>
        </div>

        </div>
        </div>
    
  )
}

export default Header;


