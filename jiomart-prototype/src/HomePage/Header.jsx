import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import GroceriesData from "../HomePage/Search/data.json";

// import SearchBar from './SearchBar';
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
            <input className={styles.searchItem}
              placeholder="Search essential, groceries, and more..." data={GroceriesData} />
        </div>

        <Link to="/">
        <div className={styles.navicon}>
            <PersonIcon style={{fontSize:"1.9rem", marginLeft:"0.5rem"}}/>
            <div className={styles.navText}>
                Sign In / Sign Up
            </div>
        </div>
        </Link>

        <Link to="/">
        <div className={styles.navicon}>
            <ShoppingCartIcon style={{marginLeft:"1rem"}}/>
            <div className={styles.navText}>Cart</div>
        </div>
        </Link>
        </div>
        </div>
    
  )
}

export default Header;


