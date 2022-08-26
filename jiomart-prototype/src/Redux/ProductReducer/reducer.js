import { GET_GROCERIES_FAILURE, GET_GROCERIES_REQUEST, GET_GROCERIES_SUCCESS, GET_PREMIUMFRUUIT_FAILURE, GET_PREMIUMFRUUIT_REQUEST, GET_PREMIUMFRUUIT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    groceries: [],
    premiumFruit: [],
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
                groceries: action.payload
            }
        case GET_GROCERIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        case GET_PREMIUMFRUUIT_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_PREMIUMFRUUIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                premiumFruit: action.payload
            }
        case GET_PREMIUMFRUUIT_FAILURE:
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