import * as types from "./actionTypes"
import axios from "axios";

const getauth=()=>(dispatch)=>{
 dispatch({type:types.USER_LOGIN_REQ})
 return axios.get("https://shivam-yadav-json-server-data.herokuapp.com/username").then((r)=>dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data})).catch
 ((r)=>{ return dispatch({type:types.USER_LOGIN_FAILURE})})
}

const postauth=(data)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_POST_REQ})
    return axios.post("https://shivam-yadav-json-server-data.herokuapp.com/username",data).then((r)=>dispatch({type:types.USER_LOGIN_POST_SUCCESS,payload:r.data})).catch
    ((r)=>{ return dispatch({type:types.USER_LOGIN_POST_FAILURE})})
   }
export {getauth,postauth}