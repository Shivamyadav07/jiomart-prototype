import React from 'react'
import styles from '../ProductPageModuleCss/MultipleProductsSection.module.css'
import { Pagination } from './Pagination'
import { SingleProductCard } from './SingleProductCard'
import { SortingDiv } from './SortingDiv'

export const MultipleProductsSection = ({ data }) => {
  return (
    <div className={styles.maindiv}>
      <SortingDiv />
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

