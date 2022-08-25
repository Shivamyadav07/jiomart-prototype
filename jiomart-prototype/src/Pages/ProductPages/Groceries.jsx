import React from 'react'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import styles from './Groceries.module.css'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

export const Groceries = () => {

  return (
    <div className={styles.home}>
      <div className={styles.toplink}>
        <Breadcrumb 
          spacing='8px' separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>AllCategory</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Groceries</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className={styles.maindiv} >
        <SideBarFilter />
        <ProductPage />
      </div>
    </div>
  )
}
