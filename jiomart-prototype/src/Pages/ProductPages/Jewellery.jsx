import React from 'react'
import styles from './Jewellery.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getJewelleryData } from '../../Redux/ProductReducer/action'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'

export const Jewellery = () => {
    const jewellery = useSelector(state => state.productreducer.jewellery);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJewelleryData());
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
                        <BreadcrumbLink href='#'>Jewellery</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className={styles.maindiv} >
                <SideBarFilter />
                <ProductPage
                    poster='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeiLzbaYpnK1vSWDLDsENpjlO89C5XD6gmQ&usqp=CAU'
                    data={jewellery}
                />
            </div>
        </div>
    )
}
