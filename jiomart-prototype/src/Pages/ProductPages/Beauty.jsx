import React from 'react'
import styles from './Beauty.module.css'
import { useDispatch, useSelector } from 'react-redux'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { getBeautyData } from '../../Redux/ProductReducer/action'
import { SideBarFilter } from '../../components/ProducPage/ProductPageJsx/SideBarFilter'
import { ProductPage } from '../../components/ProducPage/ProductPageJsx/ProductPage'
import { useLocation, useSearchParams } from 'react-router-dom'
import Header from '../../HomePage/Header'
import Navbar from '../../HomePage/Navbar'
import Footer from '../../HomePage/Footer'

export const Beauty = () => {
    const beauty = useSelector(state => state.productreducer.beauty);
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if (location || beauty.length === 0) {
            const sortBy = searchParams.get("sortBy");
            const orderBy = searchParams.get("orderBy");
            const queryParams = {
                params: {
                    _sort: sortBy,
                    _order: orderBy
                }
            }
            dispatch(getBeautyData(queryParams));
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
                                <BreadcrumbLink href='#'>Beauty</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <div className={styles.maindiv} >
                        <SideBarFilter />
                        <ProductPage
                            poster='data:image/jpeg;base64,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'
                            data={beauty}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
