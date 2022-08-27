import React from 'react'
import { Box } from '@chakra-ui/react'
import styles from '../ProductPageModuleCss/SingleProductCard.module.css'

export const SingleProductCard = ({item}) => {
    return (
        <Box className={styles.container}
            bg="white"
            width={"210px"}
            height={"343px"}
            border={"1px solid rgb(186,184,184)"}
            borderRadius={"md"}
        >
            <div className={styles.discountdiv}>
                <p className={styles.discount}>{item.discount} % OFF</p>
                <img className={styles.discountimg} src="https://i.ibb.co/Yd3ZVDg/badge.png" alt="badge" border="0" />
                
            </div>
        <img className={styles.productimage} src={item.image} alt='Productimage'/>
            <p className={styles.heading}>{item.title}</p>


            <p className={styles.mrpdiv}>M.R.P:<> </></p>
            <p className={styles.mrp}>₹ {item.mrp}</p>
            <> </>
            <p className={styles.price}>₹ {item.price}</p>

            <button className={styles.addtocart}>
                Add to cart
                <img className={styles.icon} src="https://i.ibb.co/QHDtjF4/plus.png" alt="plus" border="0" />
            </button>

        </Box>
    )
}
