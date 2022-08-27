import * as types from "./actionTypes";
import axios from "axios";

export const getCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CARTDATA_REQUEST });
  return axios
    .get("http://shivam-yadav-json-server-data.herokuapp.com/Cart")
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
    .post(`http://shivam-yadav-json-server-data.herokuapp.com/Cart`, payload)
    .then((res) => {
      console.log("AddRes:", res);
      return dispatch({ type: types.ADD_CARTDATA_SUCCESS, payload: res.data });
    })
    .then(() => getCartData())
    .catch((err) => {
      return dispatch({ type: types.ADD_CARTDATA_FAILURE });
    });
};

export const updateCartData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CARTDATA_REQUEST });
  return axios
    .patch(
      `http://shivam-yadav-json-server-data.herokuapp.com/Cart/${id}`,
      payload
    )
    .then((res) => {
      console.log("UpdateRes:", res);
      axios
        .get("http://shivam-yadav-json-server-data.herokuapp.com/Cart")
        .then((res) => {
          console.log("InnerRes:", res);
          return dispatch({
            type: types.UPDATE_CARTDATA_SUCCESS,
            payload: res.data,
          });
        });
    })
    .then(() => getCartData())
    .catch((err) => {
      return dispatch({ type: types.UPDATE_CARTDATA_FAILURE });
    });
};

export const deleteCartData = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_CARTDATA_REQUEST });
  return axios
    .delete(
      `http://shivam-yadav-json-server-data.herokuapp.com/Cart/${payload.id}`,
      payload
    )
    .then((res) => {
      console.log("deleteRes:", res);
      axios
        .get("http://shivam-yadav-json-server-data.herokuapp.com/Cart")
        .then((res) => {
          return dispatch({
            type: types.DELETE_CARTDATA_SUCCESS,
            payload: res.data,
          });
        });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_CARTDATA_FAILURE });
    });
};
