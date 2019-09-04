import React, { Component } from 'react';
import Layout from "./components/layout/Layout"
import { Switch,Route } from "react-router-dom";
import DashBoard from './components/dashboard/DashBoard'
import ShopDetails from './components/shops/ShopDetails'
import SignIn from './components/auth/SignIn'
import CreateShop from './components/shops/CreateShop'
import CreateProduct from './components/shops/CreateProduct'
import './App.css';

class App extends Component { 
    render(){
      
      const route=(
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/shop/:id" component={ShopDetails} />
          <Route  path="/dashboard" component={DashBoard} />
          <Route  path="/createshop" component={CreateShop} />
          <Route  path="/createproduct" component={CreateProduct} />
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
export default App;
