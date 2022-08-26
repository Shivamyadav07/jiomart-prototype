import { GET_GROCERIES_FAILURE, GET_GROCERIES_REQUEST, GET_GROCERIES_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    products: [],
    isError: false
}

export const productreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GROCERIES_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_GROCERIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case GET_GROCERIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return {
                ...state
            }
    }
}