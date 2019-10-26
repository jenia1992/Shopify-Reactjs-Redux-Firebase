import React, { Component } from 'react';
import ShopList from '../shops/ShopList'
import * as actionType from '../../store/actions/index'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import ProductList from '../shops/ProductList'

class Categories extends Component {

    componentDidMount(){
        // console.log(this.props)
        // console.log(this.props.orderedRes)
        // this.prop.cat = this.props.cat;
    }    
    render() {
        
        return (
            <div >
                {this.props.fromCollection === "products" ?
                <ProductList 
                products={this.props.orderedProducts} 
                deleteProduct={this.props.deleteProduct} 
                addProductToCart={this.props.addProductToCart} 
                rateProduct={this.props.rateProduct}
                isCart={!this.props.auth.uid ? true : false} 
                productViews={this.props.productViews}
                 /> :
                 <ShopList shops={this.props.orderedShops} />}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log("CATEGORIES!!!=>",state.firestore)
    return {
        orderedShops: state.firestore.ordered.shops,
        orderedProducts: state.firestore.ordered.products,
        auth:state.firebase.auth,
    }
}
const mapDispatchToProps=(disatch)=>{
    return{
        deleteProduct:(productID)=>disatch(actionType.deleteProduct(productID)),
        addProductToCart:(product)=>disatch(actionType.addProductToCart(product)),
        rateProduct:(value,product)=>disatch(actionType.rateProduct(value,product)),
        productViews:(product)=>disatch(actionType.productViews(product)),
     
    }
  }
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props)=>{
        
        if(props.fromCollection !=="" && props.where1 !=="" && props.where2 !=="" && props.condition !==""){
            return ([{ collection:props.fromCollection,where:[props.where1,props.condition,props.where2]}])
        }
        if(props.fromCollection !== "" ){
            return ([{ collection:props.fromCollection}])
        }
        
        
        
        
    })
    )(Categories)