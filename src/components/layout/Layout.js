import React, { Component } from "react";
import NavBar from "./NavBar"
class Layout extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
          <NavBar/>
      <div className="container">
        {this.props.children}
      </div>
       
           
      </div>
      
    );
  }
}

export default Layout;