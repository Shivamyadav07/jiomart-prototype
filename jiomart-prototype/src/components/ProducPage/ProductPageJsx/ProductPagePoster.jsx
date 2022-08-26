import React from 'react'
import styles from '../ProductPageModuleCss/ProductPagePoster.module.css'

export const ProductPagePoster = ({poster}) => {
  return (
    <div className={styles.poster}>
        <img src={poster} alt='Postarimage'/>
    </div>
  )
}
