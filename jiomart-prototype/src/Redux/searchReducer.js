import { SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS } from "./action_types"


const initialState={
    loading:false,
    searchResults:[],
    error:false,
    paginateData:{}
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case SEARCH_SUCCESS:
            return {
                loading: false,
                searchResults: action.payload.data,
                paginateData:action.payload.headers["x-total-count"]
            }

        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

