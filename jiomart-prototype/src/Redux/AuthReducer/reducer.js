
import * as types from "./actionTypes"
const initState={
    isAuth:false,
    token:[],
    isLoading:false,
    isError:false
}

const AuthReducer=(state=initState,action)=>{
const{type,payload}=action;
switch(type)
{
    case types.USER_LOGIN_REQ:
        return{
            ...state,
            isLoading:true,
            isError:false,
            isAuth:false
        }
    case types.USER_LOGIN_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isError:false,
            isAuth:true,
            token:payload
        }
    case types.USER_LOGIN_FAILURE:
        return{
            ...state,
            isLoading:false,
            isError:true,
            isAuth:false
        }

        case types.USER_LOGIN_POST_REQ:
        return{
            ...state,
            isLoading:true,
            isError:false,
            isAuth:false
        }
    case types.USER_LOGIN_POST_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isError:false,
            isAuth:true,
            token:payload
        }
    case types.USER_LOGIN_POST_FAILURE:
        return{
            ...state,
            isLoading:false,
            isError:true,
            isAuth:false
        }
        default:return state;
}
    }
    
export {AuthReducer}