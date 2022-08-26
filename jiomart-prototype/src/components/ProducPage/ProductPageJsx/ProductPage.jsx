import React from 'react'
import { MultipleProductsSection } from './MultipleProductsSection'
import { ProductPagePoster } from './ProductPagePoster'
import { SortingDiv } from './SortingDiv'
import styles from '../ProductPageModuleCss/ProductPage.module.css'

export const ProductPage = ({poster,data}) => {
  return (
    <div className={styles.maindiv}>
        <ProductPagePoster poster={poster}/>
        <SortingDiv/>
        <MultipleProductsSection data={data} />
    </div>
  )
}
