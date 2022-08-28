import { CHANGE_CAT } from "./action_types";



export const currentCatReducer = (state = "", action) => {
    switch (action.type) {
        case CHANGE_CAT:
            return action.payload
        default:
            return state;
    }
}
