import { CATEGORY_FAIL, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "./action_types"


const initialState={
    loading:false,
    error:false,
    category:[]
}

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload,
            }

        case CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

