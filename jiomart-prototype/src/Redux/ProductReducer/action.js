import axios from 'axios'
import {
    GET_BEAUTY_FAILURE,
    GET_BEAUTY_REQUEST,
    GET_BEAUTY_SUCCESS,
    GET_ELECTRONICS_FAILURE,
    GET_ELECTRONICS_REQUEST,
    GET_ELECTRONICS_SUCCESS,
    GET_FASHION_FAILURE,
    GET_FASHION_REQUEST,
    GET_FASHION_SUCCESS,
    GET_GROCERIES_FAILURE,
    GET_GROCERIES_REQUEST,
    GET_GROCERIES_SUCCESS,
    GET_HOMEKITCHEN_FAILURE,
    GET_HOMEKITCHEN_REQUEST,
    GET_HOMEKITCHEN_SUCCESS,
    GET_JEWELLERY_FAILURE,
    GET_JEWELLERY_REQUEST,
    GET_JEWELLERY_SUCCESS,
    GET_PREMIUMFRUUIT_FAILURE,
    GET_PREMIUMFRUUIT_REQUEST,
    GET_PREMIUMFRUUIT_SUCCESS
} from "./actionTypes"

export const getGroceriesData = (params) => (dispatch) => {
    dispatch({ type: GET_GROCERIES_REQUEST, payload: true })
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Groceries",params)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: GET_GROCERIES_SUCCESS, payload: res.data })
        }).catch(() => {
            dispatch({ type: GET_GROCERIES_FAILURE, payload: true })
        })
}

export const getPremiumfruitData = (params) => (dispatch) => {
    dispatch({ type: GET_PREMIUMFRUUIT_REQUEST, payload: true });
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/PremiumFruits",params)
        .then((res) => {
            dispatch({ type: GET_PREMIUMFRUUIT_SUCCESS, payload: res.data });
        }).catch(() => {
            dispatch({ type: GET_PREMIUMFRUUIT_FAILURE, payload: true });
        })
}

export const getHomeKitchenData = (params) => (dispatch) => {
    dispatch({ type: GET_HOMEKITCHEN_REQUEST, payload: true });
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/HomeKitchen",params)
        .then((res) => {
            dispatch({ type: GET_HOMEKITCHEN_SUCCESS, payload: res.data });
        }).catch(() => {
            dispatch({ type: GET_HOMEKITCHEN_FAILURE, payload: true });
        })
}

export const getElectronicsData = (params) => (dispatch) => {
    dispatch({ type: GET_ELECTRONICS_REQUEST, payload: true });
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Electronics",params)
        .then((res) => {
            dispatch({ type: GET_ELECTRONICS_SUCCESS, payload: res.data });
        }).catch(() => {
            dispatch({ type: GET_ELECTRONICS_FAILURE, payload: true });
        })
}

export const getFashionData = (params) => (dispatch) => {
    dispatch({ type: GET_FASHION_REQUEST, payload: true });
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Fashion",params)
        .then((res) => {
            dispatch({ type: GET_FASHION_SUCCESS, payload: res.data });
        }).catch(() => {
            dispatch({ type: GET_FASHION_FAILURE, payload: true });
        })
}

export const getBeautyData = (params) => (dispatch) => {
    dispatch({ type: GET_BEAUTY_REQUEST, payload: true });
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Beauty",params)
        .then((res) => {
            dispatch({ type: GET_BEAUTY_SUCCESS, payload: res.data });
        }).catch(() => {
            dispatch({ type: GET_BEAUTY_FAILURE, payload: true });
        })
}

export const getJewelleryData = (params) => (dispatch) => {
    dispatch({ type: GET_JEWELLERY_REQUEST, payload: true });
    axios.get("https://shivam-yadav-json-server-data.herokuapp.com/Jewellery",params)
        .then((res) => {
            dispatch({ type: GET_JEWELLERY_SUCCESS, payload: res.data });
        }).catch(() => {
            dispatch({ type: GET_JEWELLERY_FAILURE, payload: true });
        })
}