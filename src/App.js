import React, { Component } from 'react';
import Layout from "./components/layout/Layout"
import { Switch,Route } from "react-router-dom";
import { connect } from 'react-redux'
import * as actionType from './store/actions/index'
import DashBoard from './components/dashboard/DashBoard'
import ShopDetails from './components/shops/ShopDetails'
import SignIn from './components/auth/SignIn'
import CreateShop from './components/shops/CreateShop'
import CreateProduct from './components/shops/CreateProduct'
import UserArea from './components/dashboard/UserArea'
import Cart from './components/dashboard/Cart'
import './App.css';

class App extends Component { 
  state={
    isUid:false
  }
  componentDidMount(){
    this.props.getProductsFromCart()
    if(this.props.auth.uid){
      this.setState({isUid:true})
    }
  }
    render(){
      let {auth} = this.props
      const route=(
        <Switch>
          {!auth.uid ? <Route exact path="/" component={SignIn} />:  <Route exact path="/" component={DashBoard} />}
          <Route path="/shop/:id" component={ShopDetails} />
          <Route  path="/dashboard" component={DashBoard} />
          {auth.uid && <Route  path="/createshop" component={CreateShop} />}
          {auth.uid && <Route  path="/createproduct" component={CreateProduct} />}
          {auth.uid && <Route path="/userarea" component={UserArea}/>}
          {auth.uid && <Route path="/cart" component={Cart}/>}
          {/* <Route  path="/login" component={Login} />
          <Route  path="/shoppage" component={ShopPage} /> */}
        </Switch>
      )
    return (
      <Layout>
        {route}
      </Layout>
    );
  }
}

const mapStateToProps=(state)=>{
  // console.log(state)
  return{
      auth:state.firebase.auth,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      getProductsFromCart:()=>dispatch(actionType.getProductsFromCart())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
