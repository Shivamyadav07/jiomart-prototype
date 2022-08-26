import axios from 'axios'
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"

export const getProductData=()=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_REQUEST,payload:true})
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Groceries")
    .then((res)=>{
        console.log(res.data);
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_PRODUCTS_FAILURE,payload:true})
    })
}