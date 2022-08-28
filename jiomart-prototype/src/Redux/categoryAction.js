import { CHANGE_CAT } from "./action_types"


export const changeCat = (catName) => {
    return ({
        type:CHANGE_CAT,
        payload:catName
    })
}
