import axios from 'axios'
import { GET_GROCERIES_FAILURE, GET_GROCERIES_REQUEST, GET_GROCERIES_SUCCESS } from "./actionTypes"

export const getGroceriesData=()=>(dispatch)=>{
    dispatch({type:GET_GROCERIES_REQUEST,payload:true})
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Groceries")
    .then((res)=>{
        console.log(res.data);
        dispatch({type:GET_GROCERIES_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_GROCERIES_FAILURE,payload:true})
    })
}