import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import {AuthReducer as authreducer} from "./AuthReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({authreducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export{store}