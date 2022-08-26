import { GET_BEAUTY_FAILURE, GET_BEAUTY_REQUEST, GET_BEAUTY_SUCCESS, GET_ELECTRONICS_FAILURE, GET_ELECTRONICS_REQUEST, GET_ELECTRONICS_SUCCESS, GET_FASHION_FAILURE, GET_FASHION_REQUEST, GET_FASHION_SUCCESS, GET_GROCERIES_FAILURE, GET_GROCERIES_REQUEST, GET_GROCERIES_SUCCESS, GET_HOMEKITCHEN_FAILURE, GET_HOMEKITCHEN_REQUEST, GET_HOMEKITCHEN_SUCCESS, GET_JEWELLERY_FAILURE, GET_JEWELLERY_REQUEST, GET_JEWELLERY_SUCCESS, GET_PREMIUMFRUUIT_FAILURE, GET_PREMIUMFRUUIT_REQUEST, GET_PREMIUMFRUUIT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    groceries: [],
    premiumFruit: [],
    homeKitchen: [],
    fashion: [],
    electronics: [],
    beauty: [],
    jewellery: [],
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
        case GET_HOMEKITCHEN_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_HOMEKITCHEN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                homeKitchen: action.payload
            }
        case GET_HOMEKITCHEN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        case GET_ELECTRONICS_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_ELECTRONICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                electronics: action.payload
            }
        case GET_ELECTRONICS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        case GET_FASHION_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_FASHION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fashion: action.payload
            }
        case GET_FASHION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        case GET_BEAUTY_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_BEAUTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                beauty: action.payload
            }
        case GET_BEAUTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        case GET_JEWELLERY_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_JEWELLERY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jewellery: action.payload
            }
        case GET_JEWELLERY_FAILURE:
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