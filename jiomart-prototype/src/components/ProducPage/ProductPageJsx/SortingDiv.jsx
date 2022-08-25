import React from 'react'
import { Button } from '@chakra-ui/react'
import styles from '../ProductPageModuleCss/SortingDiv.module.css'

export const SortingDiv = () => {
  return (
    <div className={styles.sortdiv}>
        <p className={styles.productNum}>Showing 20 of 222785 items</p>
        <div>
            Sort by:
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" >Popularity</Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" >High to Low </Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" >Low to High</Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" >Discount</Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" >All Products</Button>
        </div>
    </div>
  )
}
