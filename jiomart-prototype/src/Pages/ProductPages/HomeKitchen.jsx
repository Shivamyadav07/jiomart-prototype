import React from 'react'
import styles from './HomeKitchen.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getHomeKitchenData } from '../../Redux/ProductReducer/action'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import { useLocation, useSearchParams } from 'react-router-dom'

export const HomeKitchen = () => {
    const homeKitchen = useSelector(state => state.productreducer.homeKitchen);
    const dispatch = useDispatch();
    const [searchParams]=useSearchParams();
    const location=useLocation();
  
    useEffect(() => {
      if(location||homeKitchen.length===0){
        const sortBy=searchParams.get("sortBy");
        const orderBy=searchParams.get("orderBy");
        const queryParams={
          params:{
            _sort: sortBy,
            _order: orderBy
          }
        }
        dispatch(getHomeKitchenData(queryParams));
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
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Home & Kitchen</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div className={styles.maindiv} >
                    <SideBarFilter />
                    <ProductPage
                        poster='https://www.jiomart.com/images/category/1687/home-kitchen-20220519.jpeg'
                        data={homeKitchen}
                    />
                </div>
            </div>
        </div>
    )
}
