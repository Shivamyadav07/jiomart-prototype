import React from 'react'
import { Button } from '@chakra-ui/react'
import styles from '../ProductPageModuleCss/SortingDiv.module.css'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


export const SortingDiv = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const [sortBy,setSortby]=useState('');
  const [orderBy,setorderBy]=useState('');

  const handlepopularity=()=>{
    setorderBy("desc");
    setSortby("discount")
  }

  const handlehightolow=()=>{
    setorderBy("asc");
    setSortby("price")
  }
  const handlelowtohigh=()=>{
    setorderBy("desc");
    setSortby("price")
  }
  const handlediscount=()=>{
    setorderBy("desc");
    setSortby("discount")
  }
  const handleallproducts=()=>{
    setSearchParams()
  }

  useEffect(()=>{
    if(sortBy){
      const params={};
      sortBy&&(params.sortBy=sortBy);
      orderBy&&(params.orderBy=orderBy);
      setSearchParams(params);
    }
  },[sortBy,orderBy,setSearchParams])

  return (
    <div className={styles.sortdiv}>
        <p className={styles.productNum}>Showing 20 of 222785 items</p>
        <div>
            Sort by:
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" onClick={handlepopularity}>Popularity</Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" onClick={handlelowtohigh}>High to Low </Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" onClick={handlehightolow}>Low to High</Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" onClick={handlediscount}>Discount</Button>
            <Button className={styles.mybutton} size="xs" colorScheme="blue" variant="outline" onClick={handleallproducts}>All Products</Button>
        </div>
    </div>
  )
}
