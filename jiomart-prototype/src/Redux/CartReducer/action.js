import * as types from "./actionTypes";
import axios from "axios";

export const getCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CARTDATA_REQUEST });
  return axios
    .get("https://cartdata-json.herokuapp.com/cart")
    .then((res) => {
      console.log("GetRes:", res);
      return dispatch({ type: types.GET_CARTDATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CARTDATA_FAILURE });
    });
};

export const addCartData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_CARTDATA_REQUEST });
  return axios
    .post(`https://cartdata-json.herokuapp.com/cart`, payload)
    .then((res) => {
      console.log("AddRes:", res);
      return dispatch({ type: types.ADD_CARTDATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_CARTDATA_FAILURE });
    });
};

const updateData = (payload) => (dispatch) => {
  return axios
    .patch("https://cartdata-json.herokuapp.com/cart", payload)
    .then((res) => {
      console.log("InnerRes:", res);
      return dispatch({
        type: types.UPDATE_CARTDATA_SUCCESS,
        payload: res.data,
      });
    });
};

export const updateCartData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CARTDATA_REQUEST });
  return axios
    .patch(`https://cartdata-json.herokuapp.com/cart/${id}`, payload)
    .then((res) => {
      console.log("UpdateRes:", res);
      axios.get("https://cartdata-json.herokuapp.com/cart").then((res) => {
        console.log("InnerRes:", res);
        return dispatch({
          type: types.UPDATE_CARTDATA_SUCCESS,
          payload: res.data,
        });
      });
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_CARTDATA_FAILURE });
    });
};
