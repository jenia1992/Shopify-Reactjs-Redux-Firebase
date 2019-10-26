import React, { Component } from "react";
import NavBar from "./NavBar"
class Layout extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="bgMain">
          <NavBar/>
      <div className="container-fluid">
        {this.props.children}
      </div>
       
           
      </div>
      
    );
  }
}

export default Layout;