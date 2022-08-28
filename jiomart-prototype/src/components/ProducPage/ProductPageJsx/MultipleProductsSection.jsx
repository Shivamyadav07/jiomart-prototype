import React from 'react'
import styles from '../ProductPageModuleCss/MultipleProductsSection.module.css'
import { Pagination } from './Pagination'
import { SingleProductCard } from './SingleProductCard'

export const MultipleProductsSection = ({ data }) => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.title}>
        ALL PRODUCTS
      </div>
      <div className={styles.productdiv}>
        {
          data.map((e) => {
            return <SingleProductCard item={e} />
          })
        }
      </div>
      <Pagination />
    </div>
  )
}

