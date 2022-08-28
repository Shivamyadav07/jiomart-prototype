import React from 'react'
import { MultipleProductsSection } from './MultipleProductsSection'
import { ProductPagePoster } from './ProductPagePoster'
import styles from '../ProductPageModuleCss/ProductPage.module.css'
import { SortingDiv } from './SortingDiv'

export const ProductPage = ({poster,data}) => {
  return (
    <div className={styles.maindiv}>
        <ProductPagePoster poster={poster}/>
        <SortingDiv />
        <MultipleProductsSection data={data} />
    </div>
  )
}
