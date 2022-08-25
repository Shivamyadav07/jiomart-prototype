import React from 'react'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import styles from './Groceries.module.css'

export const Groceries = () => {
  
  return (
    <div className={styles.maindiv} >
        <SideBarFilter/>
        <ProductPage/>
    </div>
  )
}
