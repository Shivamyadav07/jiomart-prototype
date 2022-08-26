import React from 'react'
import styles from './PremiumFruits.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getPremiumfruitData } from '../../Redux/ProductReducer/action'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'

export const PremiumFruits = () => {
    const premiumFruit = useSelector(state => state.productreducer.premiumFruit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPremiumfruitData());
    }, [])


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
                        <BreadcrumbLink href='#'>Premium Fruits</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className={styles.maindiv} >
                <SideBarFilter />
                <ProductPage
                    poster='https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-green-pure-natural-organic-fruit-poster-banner-background-image_183522.jpg'
                    data={premiumFruit}
                />
            </div>
        </div>
    )
}
