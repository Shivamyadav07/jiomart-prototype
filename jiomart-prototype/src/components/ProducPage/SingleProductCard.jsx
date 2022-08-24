import React from 'react'
import { Box } from '@chakra-ui/react'
import styles from './SingleProductCard.module.css'

export const SingleProductCard = () => {
    return (
        <Box className={styles.container}
            bg="white"
            width={"210px"}
            height={"343px"}
            border={"1px solid rgb(186,184,184)"}
            borderRadius={"md"}
        >
            <div className={styles.discountdiv}>
                <p className={styles.discount}>33 % OFF</p>
                <img className={styles.discountimg} src="https://i.ibb.co/Yd3ZVDg/badge.png" alt="badge" border="0" />
                
            </div>
            <img src='https://www.jiomart.com/images/product/150x150/491963211/jiomart-blue-and-white-polyester-2-fold-umbrella-24-5-inch-product-images-o491963211-p590317361-0-202205180135.jpg' alt='Product image' />
            <p className={styles.heading}>Jiomart Blue and White Polyester 2 Fold Umbrella 62.2 cm</p>


            <p className={styles.mrpdiv}>M.R.P:<> </></p>
            <p className={styles.mrp}>₹ 299.00</p>
            <> </>
            <p className={styles.price}>₹ 199.00</p>

            <button className={styles.addtocart}>
                Add to cart
                {/* <AddIcon marginLeft={"40px"} w={4} h={4} /> */}
                <img className={styles.icon} src="https://i.ibb.co/QHDtjF4/plus.png" alt="plus" border="0" />
            </button>

        </Box>
    )
}
