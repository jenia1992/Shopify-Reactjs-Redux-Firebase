import * as actionType from "../actions/actionType"
import { updateObject } from "./utilReducer"
const initState = {
    shops: [],
    products: [],
    prodLoaded: false,
    views:0,
    sold:0,
    shopError: null
}
const ShopReducer = (state = initState, action) => {
    switch (action.type) {

        case actionType.CREATE_SHOP:
            return state

        case actionType.CREATE_SHOP_ERROR:
            return updateObject(state, { shophError: action.payload })

        case actionType.CREATE_PRODUCT:
            return state

        case actionType.CREATE_PRODUCT_ERROR:
            return updateObject(state, { shophError: action.payload })

        case actionType.URL_CREATED:
            return state

        case actionType.URL_CREATE_ERROR:
            return updateObject(state, { shophError: action.payload })
        case actionType.URL_DELETE:
            return state

        case actionType.URL_DELETE_ERROR:
            return state


        case actionType.GET_PRODUCTS:
            return updateObject(state, { products: action.payload.productsArr,views:action.payload.views,sold:action.payload.sold, prodLoaded: true })

        case actionType.UNSET_PRODUCTS:
            return updateObject(state, { products: [], prodLoaded: false })

        case actionType.DELETE_PRODUCT:
            return  updateObject(state, { products:action.payload })

        case actionType.DELETE_PRODUCT_ERROR:
            return updateObject(state, { shopError:action.payload })

        case actionType.ADD_PRODUCT_TO_CART:
            return updateObject(state,{cart:action.payload})

        case actionType.ADD_PRODUCT_TO_CART_ERROR:
            return updateObject(state,{shopError:action.payload})
        case actionType.RATE_PRODUCT:
            return state
        

        default:
            return state
    }

}
export default ShopReducer