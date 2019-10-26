import * as actionType from "../actions/actionType"
import { updateObject } from "./utilReducer"
const initState = {
    dashBoardForm:"",
    authError:null
}
const authReducer = (state = initState,action)=>{
    switch(action.type){
        case actionType.LOGIN_ERROR:
            return updateObject(state,{authError:action.payload})
        case actionType.LOGIN_SUCCESS:
            // console.log('login success')
            return updateObject(state,{authError:action.payload})
        case actionType.SIGNOUT_SUCCESS:
            console.log('signout success')
        case actionType.DASHBOARD_FORM_UPDATE:
            return updateObject(state,{dashBoardForm:action.payload})
        default:
            return state;
    }
}
export default authReducer