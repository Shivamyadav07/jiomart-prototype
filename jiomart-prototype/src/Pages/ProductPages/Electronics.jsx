import React from 'react'
import styles from './Electronics.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getElectronicsData } from '../../Redux/ProductReducer/action'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'

export const Electronics = () => {
    const electronics = useSelector(state => state.productreducer.electronics);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getElectronicsData());
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
                        <BreadcrumbLink href='#'>Electronics</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className={styles.maindiv} >
                <SideBarFilter />
                <ProductPage
                    poster='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpenkXFPmB9Xwyg-Lm6RsnwV0biEbPLVKdhg&usqp=CAU'
                    data={electronics}
                />
            </div>
        </div>
    )
}
