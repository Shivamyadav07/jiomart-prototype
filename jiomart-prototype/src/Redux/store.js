import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { AuthReducer as authreducer } from "./AuthReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authreducer, cartReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
