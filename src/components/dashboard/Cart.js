import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductList from '../shops/ProductList'
import * as actionType from '../../store/actions/index'
class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoaded:false
    
      }
    }
    
    render() {
        return (
            <div className="container">
                <ProductList 
                products={this.props.cartProducts}
                isUid={true} isCart={true} 
                deleteProduct={this.props.deleteProductFromCart}
                rateProduct={this.props.rateProduct}
                />
                <div className="d-flex justify-content-center mt-1">
                <button onClick={()=>this.props.checkOut()}  className="btn btn-success">Check Out {this.props.totalPrice}$</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cart.cart,
        totalPrice:state.cart.totalPrice
        
    }
}

const mapDispatchToProps=(disatch)=>{
    return{
        deleteProductFromCart:(product)=>disatch(actionType.deleteProductFromCart(product)),
        getProductFromCart:()=>disatch(actionType.getProductsFromCart()),
        rateProduct:(value,product)=>disatch(actionType.rateProduct(value,product)),
        checkOut:()=>disatch(actionType.checkOut()),
    
     
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart)