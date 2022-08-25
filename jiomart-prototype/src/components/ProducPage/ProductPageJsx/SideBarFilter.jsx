import React from 'react'
import { Box } from '@chakra-ui/react'
import styles from '../ProductPageModuleCss/SideBarFilter.module.css'

export const SideBarFilter = () => {
    return (
        <Box className={styles.filterbox} borderWidth='1px' borderRadius='lg'>
            <p className={styles.heading}>Filters</p>
            <p className={styles.subheading}>Availability</p>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>InStock Products</label>
            </div>
            <p className={styles.subheading}>Categories</p>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Groceries</label>
            </div>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Premium Fruits</label>
            </div>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Fashion</label>
            </div>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Home & Kitchen</label>
            </div>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Jewellery</label>
            </div>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Beauty</label>
            </div>
            <div className={styles.selectdiv}>
                <input type="checkbox" />
                <label className={styles.title}><> </>Electronics</label>
            </div>
        </Box>
    )
}
