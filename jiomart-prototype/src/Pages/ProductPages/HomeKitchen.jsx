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

export const HomeKitchen = () => {
    const homeKitchen = useSelector(state => state.productreducer.homeKitchen);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomeKitchenData());
    }, [])


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
