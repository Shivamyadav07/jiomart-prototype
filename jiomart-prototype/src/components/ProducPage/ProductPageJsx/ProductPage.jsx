import React from 'react'
import { MultipleProductsSection } from './MultipleProductsSection'
import { ProductPagePoster } from './ProductPagePoster'
import { SortingDiv } from './SortingDiv'
import styles from '../ProductPageModuleCss/ProductPage.module.css'

export const ProductPage = () => {
  return (
    <div className={styles.maindiv}>
        <ProductPagePoster/>
        <SortingDiv/>
        <MultipleProductsSection/>
    </div>
  )
}
