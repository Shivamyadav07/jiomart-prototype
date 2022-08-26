import * as types from "./actionTypes"
import axios from "axios";

const getauth=()=>(dispatch)=>{
 dispatch({type:types.USER_LOGIN_REQ})
 return axios.get("http://localhost:8080/username").then((r)=>dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data})).catch
 ((r)=>{ return dispatch({type:types.USER_LOGIN_FAILURE})})
}

const postauth=(data)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_POST_REQ})
    return axios.post("http://localhost:8080/username",data).then((r)=>dispatch({type:types.USER_LOGIN_POST_SUCCESS,payload:r.data})).catch
    ((r)=>{ return dispatch({type:types.USER_LOGIN_POST_FAILURE})})
   }
export {getauth,postauth}