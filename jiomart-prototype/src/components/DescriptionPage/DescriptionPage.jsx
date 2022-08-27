import React from 'react'
import styles from './DescriptionPage.module.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { SingleProductCard } from '../ProducPage/ProductPageJsx/SingleProductCard'

export const DescriptionPage = () => {
  const arr=[{
    "image": "https://www.jiomart.com/images/product/150x150/491963211/jiomart-blue-and-white-polyester-2-fold-umbrella-24-5-inch-product-images-o491963211-p590317361-0-202205180135.jpg",
    "title": "Jiomart Blue and White Polyester 2 Fold Umbrella 62.2 cm",
    "mrp": 299,
    "price": 199,
    "discount": 33
  },
  {
    "image": "https://www.jiomart.com/images/product/150x150/490002339/closeup-everfresh-red-hot-triple-fresh-formula-toothpaste-80-g-product-images-o490002339-p490002339-0-202203170622.jpg",
    "title": "Closeup Everfresh+ Red Hot Triple Fresh Formula Toothpaste 80 g",
    "mrp": 48,
    "price": 44,
    "discount": 8
  },
  {
    "image": "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
    "title": "Saffola Gold Refined Rice Bran And Sunflower Based Blended Oil 3 L + Daawat Devaaya Basmati Rice 5 kg (Combo Pack)",
    "mrp": 1310,
    "price": 875,
    "discount": 33
  },
  {
    "image": "https://www.jiomart.com/images/product/150x150/490005639/daawat-devaaya-basmati-rice-1-kg-product-images-o490005639-p490005639-0-202205172326.jpg",
    "title": "Daawat Devaaya Basmati Rice 1 kg",
    "mrp": 125,
    "price": 92,
    "discount": 26
  },
  {
    "image": "https://www.jiomart.com/images/product/150x150/490863714/daawat-rozana-super-basmati-rice-1-kg-product-images-o490863714-p490863714-0-202203171018.jpg",
    "title": "Daawat Rozana Super Basmati Rice 1 kg",
    "mrp": 98,
    "price": 70,
    "discount": 28
  }]
  return (
    <div className={styles.maindiv}>
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

      <div className={styles.desdiv}>
        <div className={styles.simagediv}>
          <img className={styles.simage} src='https://www.jiomart.com/images/product/150x150/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg' alt='ProductImage' />
        </div>
        <div className={styles.limagediv}>
          <div className={styles.discountdiv}>
            <p className={styles.discount}>{5} % OFF</p>
            <img className={styles.discountimg} src="https://i.ibb.co/Yd3ZVDg/badge.png" alt="badge" border="0" />

          </div>
          <img className={styles.limage} src='https://www.jiomart.com/images/product/600x600/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg' alt='ProductImage' />
        </div>
        <div className={styles.des}>
          <p className={styles.des1}>Good Life Sugar (M) 1 kg</p>
          <p className={styles.des2}>GOOD LIFE</p>
          <p className={styles.des3}>₹ 46.00 </p>
          <>  </>
          <p className={styles.des4}>M.R.P:
            <> </>
            <p className={styles.mrp}>₹ 55.00</p>
          </p>
          <p className={styles.des5}>You Save:
            <> </>
            <p className={styles.save}> ₹ 9.00</p>
            <> </>
            Inclusive of all taxes
          </p>
          <p className={styles.des7}>In Stock</p>
          <p className={styles.des8}>Sold by Reliance Retail</p>
          <p className={styles.des9}>Inaugural Offer</p>
          <p className={styles.des10}>Free Shipping</p>
          <img style={{ "height": "35px", "width": "220px" }} src='https://i.ibb.co/526QBqs/image.png' alt='PaytmImage' />
          <button className={styles.addtocart}>
            Add to cart
            <img className={styles.icon} src="https://i.ibb.co/QHDtjF4/plus.png" alt="plus" border="0" />
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <p className={styles.desdivheading}>Description</p>
      <div className={styles.desbottomdiv}>
        <p className={styles.desdivtitle}>Good Life Sugar (M) 1 kg</p>
        <p className={styles.desdivdetail}>
          Sugar is rich in nutrients and is usually used
          as a sweetener in dishes. The consumption of sugar
          provides energy in the body. The quality of the product
          is supreme so as to suit the consumer's requirement.
          It is packed with the utmost care. Buy Good Life Sugar
          (M) online now!
        </p>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <p className={styles.desdivheading}>Features & Details</p>
      <div className={styles.desbottomdiv}>
        <li className={styles.uonrderdelist}>100% pure and natural product</li>
        <li className={styles.uonrderdelist}>Superior quality product</li>
        <li className={styles.uonrderdelist}>Pure and crystal</li>
      </div>
      <p className={styles.desdivheading}>Features & Details</p>
      <div className={styles.productdiv}>
        {
          arr.map((e)=>{
            return <SingleProductCard item={e}/>
          })
        }
      </div>
    </div>
  )
}
