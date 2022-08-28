import React from 'react'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import styles from './Groceries.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getGroceriesData } from '../../Redux/ProductReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'

export const Groceries = () => {
  const groceries = useSelector(state => state.productreducer.groceries);
  const dispatch = useDispatch();
  const [searchParams]=useSearchParams();
  const location=useLocation();

  useEffect(() => {
    if(location||groceries.length===0){
      const sortBy=searchParams.get("sortBy");
      const orderBy=searchParams.get("orderBy");
      const queryParams={
        params:{
          _sort: sortBy,
          _order: orderBy
        }
      }
      dispatch(getGroceriesData(queryParams));
    }
    
  }, [location.search])


  return (
    <div style={{ "backgroundColor": "rgb(243, 243, 243)" }}>
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
          <ProductPage
            poster='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg'
            data={groceries}
          />
        </div>
      </div>
    </div>
  )
}
