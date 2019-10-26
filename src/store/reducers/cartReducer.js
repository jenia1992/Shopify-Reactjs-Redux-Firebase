import * as actionType from "../actions/actionType"
import { updateObject } from "./utilReducer"
const initState = {
    cart:[],
    size:0,
    totalPrice:0,
    cartError:null
}
const cartReducer = (state = initState,action)=>{
    switch(action.type){
        case actionType.ADD_PRODUCT_TO_CART:
            return updateObject(state)

        case actionType.ADD_PRODUCT_TO_CART_ERROR:
            return updateObject(state,{cartError:action.payload})

        case actionType.GET_PRODUCT_FROM_CART:
            return updateObject(state,{cart:action.payload.cartArr,size:action.payload.size,totalPrice:action.payload.totalPrice})
        
        case actionType.DELTE_PRODUCT_FROM_CART:
            return updateObject(state,{cart:action.payload.cartArr,size:action.payload.size,totalPrice:action.payload.totalPrice})
        case actionType.CHECK_OUT:
            return state
        default:
            return state;
    }
}
export default cartReducer