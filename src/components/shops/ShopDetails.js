import React, { Component } from "react"
import { createProduct } from '../../store/actions/shopAction'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import { getShopProducts,unSetProducts } from '../../store/actions/shopAction'
import ProductList from './ProductList'
class ShopDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            goCreate:false
      }
    }
    componentDidMount(){
    this.props.getShopProducts(this.props.shopId)
    console.log(this.props.shopId)
    
    }
    componentWillUnmount(){
        this.props.unSetProducts()
    }
    goCreate=()=>{
        this.setState({goCreate:true})
      }
    render(){
    const { shop,auth,shopId } = this.props;
    if (shop) {
        // console.log(shop)
        return (
            <div>
                <h1>InSideShop {shop.name}</h1>
                {auth.uid===shop.ownerId&&<button onClick={()=>this.goCreate()}>Add Product</button>}
                {(auth.uid===shop.ownerId)&&this.state.goCreate?
                <Redirect to={{
                    pathname: "/createproduct",
                    state: { shopId:shopId }
                }}>ADD Product</Redirect>
                :null
                }
                {this.props.isLoaded&&<ProductList products={this.props.products} />}
                
            </div>
        )

    }
    else {
        return (
            <div>
                <h1>Loading Shop...</h1>
            </div>
        )
    }
}
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id;
    const shops = state.firestore.data.shops
    const shop = shops ? shops[id] : null
    // console.log(shop)
    return {
        shopId:id,
        shop: shop,
        auth:state.firebase.auth,
        products:state.shop.products,
        isLoaded:state.shop.prodLoaded
    }
}
const mapDispatchToProps=(disatch)=>{
    return{
        createProduct:(product)=>disatch(createProduct(product)),
        getShopProducts:(shopId)=>disatch(getShopProducts(shopId)),
        unSetProducts:()=>disatch(unSetProducts())
    }
  }
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'shops' }
    ])
)(ShopDetails)
