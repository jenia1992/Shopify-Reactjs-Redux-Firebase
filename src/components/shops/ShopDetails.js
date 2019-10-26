import React, { Component } from "react"
import * as actionType from '../../store/actions/index'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
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
    // console.log(this.props.shopId)
    this.props.getProductsFromCart()
    
    
    }
    componentWillUnmount(){
        this.props.unSetProducts()
    }
    goCreate=()=>{
        this.setState({goCreate:true})
      }
    render(){
    const { shop,auth,shopId } = this.props;
    // console.log("PROPSSSSSS",this.props)
    if (shop) {
        // console.log(shop)
        return (
            <div className="container">
                <h1>{shop.name}</h1>
                {auth.uid===shop.ownerId&&<div className="col">
                    <div className="col-6 font-weight-bold">VIEWS:{this.props.views}</div>
                    <div className="col-6 font-weight-bold">SOLD:{this.props.sold}</div>
                </div>}
                {auth.uid===shop.ownerId&&<button className="btn btn-primary" onClick={()=>this.goCreate()}>Add Product</button>}
                {(auth.uid===shop.ownerId)&&this.state.goCreate?
                <Redirect to={{
                    pathname: "/createproduct",
                    state: { shopId:shopId ,shopCategory:shop.category }
                }}>ADD Product</Redirect>
                :null
                }

                

                {this.props.isLoaded&&<ProductList 
                addProductToCart={this.props.addProductToCart}
                deleteProduct={this.props.deleteProduct} 
                rateProduct={this.props.rateProduct}
                isUid={auth.uid===shop.ownerId}
                isCart={!auth.uid ? true : false} 
                products={this.props.products} 
                productViews={this.props.productViews}
                />}
                
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
    const id = ownProps.match.params.id;
    const shops = state.firestore.data.shops
    const shop = shops ? shops[id] : null
    // console.log(shop)
    return {
        shopId:id,
        shop: shop,
        auth:state.firebase.auth,
        products:state.shop.products,
        views:state.shop.views,
        sold:state.shop.sold,
        isLoaded:state.shop.prodLoaded
    }
}
const mapDispatchToProps=(disatch)=>{
    return{
        getShopProducts:(shopId)=>disatch(actionType.getShopProducts(shopId)),
        unSetProducts:()=>disatch(actionType.unSetProducts()),
        deleteProduct:(productID)=>disatch(actionType.deleteProduct(productID)),
        addProductToCart:(product)=>disatch(actionType.addProductToCart(product)),
        getProductsFromCart:()=>disatch(actionType.getProductsFromCart()),
        rateProduct:(value,product)=>disatch(actionType.rateProduct(value,product)),
        productViews:(product)=>disatch(actionType.productViews(product)),
        
    }
  }
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'shops' }
    ])
)(ShopDetails)
