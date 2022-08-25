import React from 'react'
import styles from '../ProductPageModuleCss/MultipleProductsSection.module.css'
import { Pagination } from './Pagination'
import { SingleProductCard } from './SingleProductCard'

export const MultipleProductsSection = () => {
  var arr=[1,2,3,4,5,6,7,8,9,9,9,9]
  return (
    <div className={styles.maindiv}>
      <div className={styles.title}>
        ALL PRODUCTS
      </div>
      <div className={styles.productdiv}>
        {
          arr.map(()=>{
            return <SingleProductCard />
          })
        }
      </div>
      <Pagination/>
    </div>
  )
}

