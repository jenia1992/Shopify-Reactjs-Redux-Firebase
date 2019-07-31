const initState = {
    shops:[],
    products:[],
    prodLoaded:false
}
const ShopReducer = (state = initState,action)=>{
    switch (action.type){
        case 'CREATE_SHOP':
            console.log('created shop', action.shop)
            return state;
        case 'CREATE_SHOP_ERROR':
            console.log('create shop error', action.err)
            return state
        case 'CREATE_PRODUCT':
            console.log('created product', action.product)
            return state
        case 'CREATE_PRODUCT_ERROR':
            console.log('create product error', action.err)
            return state
        case 'URL_CREATED':
            console.log('url created',action.url)
            return state
        case 'URL_CREATE_ERROR':
            console.log('url created',action.err)
            return state
        case 'GET_PRODUCTS':
            console.log('products ready',action.productsArr)
            return {
                ...state,
                products:action.productsArr,
                prodLoaded:true
            }
            case 'UNSET_PRODUCTS':
                    console.log('products unSet',state.products)
                    return {
                        ...state,
                        products:[],
                        prodLoaded:false
                    }
        default:
            return state
    }
    
}
export default ShopReducer