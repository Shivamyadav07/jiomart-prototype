import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from "./action_types"


const initialState={
    loading:false,
    products:[],
    error:false,
    paginateData:""
}

export const pReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.data,
                paginateData:action.payload.headers["x-total-count"]
            }

        case PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

