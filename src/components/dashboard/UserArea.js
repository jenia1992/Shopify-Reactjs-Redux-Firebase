import React, { Component } from 'react';
import {compose} from 'redux'
import { connect } from 'react-redux'
import * as actionType from '../../store/actions/index'
import ShopQuery from './ShopQuery'
import {Link} from 'react-router-dom'
class UserArea extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
        // console.log("USER AREA",this.props)
       
        
    }
    
    render() {
        const {uid}=this.props.auth;
        // console.log(uid)
                return (
            <div className="container">
                <Link className="btn btn-primary mt-1" to={"/createshop"}>Create Shop</Link>
               <ShopQuery 
                fromCollection={"shops"} 
                where1={"ownerId"} 
                condition={"=="}
                 where2={uid} />
            </div>
        )
    }
}
const mapDispatchToProps=(disatch)=>{
    return{
       
    }
  }
const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(UserArea)
