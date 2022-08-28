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
import { useLocation, useSearchParams } from 'react-router-dom'
import Header from '../../HomePage/Header'
import Navbar from '../../HomePage/Navbar'
import Footer from '../../HomePage/Footer'

export const Electronics = () => {
    const electronics = useSelector(state => state.productreducer.electronics);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if (location || electronics.length === 0) {
            const sortBy = searchParams.get("sortBy");
            const orderBy = searchParams.get("orderBy");
            const queryParams = {
                params: {
                    _sort: sortBy,
                    _order: orderBy
                }
            }
            dispatch(getElectronicsData(queryParams));
        }

    }, [location.search])

    return (
        <div style={{ "marginTop": "100px", }} >
            <Header />
            <Navbar />
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
            </div>
            <Footer />
        </div>
    )
}
