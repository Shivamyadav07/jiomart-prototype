import React from 'react'
import styles from "../HomePage/HomePageCss/Section.module.css";
import groc1 from "./Images/groc1.png";
const GridView = () => {
  return (
    <div styles={styles.groceries}>
       <h3 class={styles.text}>Top Groceries</h3>
       <div className={styles.groceriesD}>
          <img src="./Images/groc1.png" alt="" />
       </div>
    </div>
  )
}

export default GridView