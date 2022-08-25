import React from 'react'
import styles from '../ProductPageModuleCss/Pagination.module.css'
import { Button } from '@chakra-ui/react'

export const Pagination = () => {
  return (
    <div className={styles.page}>
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="ghost" size="sm">1</Button>
        <Button variant="ghost" size="sm">2</Button>
        <Button variant="ghost" size="sm">3</Button>
        <Button variant="outline" size="sm">Next</Button>
    </div>
  )
}
