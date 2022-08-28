import {
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  ORDER_CONFIRMED,
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
  SEARCH_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  UPDATE_CART,
} from './action_types';
import axios from 'axios';

export const getProducts =
  (sort, mainCat = '', cat, types, brands, price, currentPage) =>
  async (dispatch) => {
    const fetchProducts = axios.create({
      baseURL: 'https://kanthuserver.herokuapp.com/',
      method: 'get',
      params: {
        _sort: sort.property,
        _order: sort.order,
        cat: cat,
        type: types,
        brand: brands,
        cost_lte: price[1],
        cost_gte: price[0],
        _limit: 12,
        _page: currentPage,
      },
    });
    try {
      dispatch({ type: PRODUCTS_REQUEST });

      const response = mainCat
        ? await fetchProducts('/products', { params: { mainCat: mainCat } })
        : await fetchProducts('/products');

      dispatch({
        type: PRODUCTS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_FAIL,
        payload: error.response,
      });
    }
  };

export const getCategoryDetails = (payload) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });

    const { data } = await axios.get(
      'https://kanthuserver.herokuapp.com/categories'
    );

    dispatch({
      type: CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_FAIL,
      payload: error.response,
    });
  }
};

export const searchProducts =
  (query, sort, currentPage) => async (dispatch) => {
    const fetchProducts = axios.create({
      baseURL: 'https://kanthuserver.herokuapp.com/',
      method: 'get',
      params: {
        q: query,
        _sort: sort.property,
        _order: sort.order,
        _limit: 12,
        _page: currentPage,
      },
    });
    try {
      dispatch({ type: SEARCH_REQUEST });

      const response = await fetchProducts('/products');

      dispatch({
        type: SEARCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_FAIL,
        payload: error.response,
      });
    }
  };
export const updateCart = (payload) => {
  if (payload === 'order-confirmed') {
    return {
      type: ORDER_CONFIRMED,
    };
  }

  return payload.quantity !== 0
    ? {
        type: UPDATE_CART,
        payload: payload,
      }
    : {
        type: REMOVE_FROM_CART,
        payload: payload.product.id,
      };
};
