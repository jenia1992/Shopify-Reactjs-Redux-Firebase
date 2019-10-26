import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionType from '../../store/actions/index'

const SignedInLinks = (props) => {
    const {auth}=props
    // console.log(auth)
    // props.getProductsFromCart()
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* left side links */}
            <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item nav-link" ><Link to={"/createshop"}>Create Shop</Link></li> */}
                
            </ul>
            {/* right side links*/}
            <ul className="navbar-nav ">
                <li style={{cursor:"pointer"}} className="mr-5 mt-2"><Link className="material-icons" style={{color:"black"}} to={"/cart"}>shopping_cart</Link>{props.cartSize===0 ? null : <span className="badge badge-primary cartSpan">{props.cartSize}</span>}</li>
                
                <li className=" nav-item dropdown d-flex"><Link to={"/userarea"}><img className="rounded-circle" src={auth.photoURL} style={{height:"35px"}} alt="..."/></Link>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" >
                    <li onClick={props.signOut} style={{cursor:"pointer"}} className="dropdown-item text-center" >LogOut <i className="material-icons" style={{color:"red"}} >power_settings_new </i><Redirect to={{pathname: "/dashboard",}}> </Redirect></li>
                    </ul>
                </li>
                
                {/* <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-bell"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Link</a>
                    <a class="dropdown-item" href="#">Link</a>
                    <a class="dropdown-item" href="#">Link</a>
                </div>
            </li> */}
                
            </ul>
        </div>
        
    )
}
const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth,
        cartSize:state.cart.size
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>dispatch(actionType.signOut()),
        getProductsFromCart:()=>dispatch(actionType.getProductsFromCart())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);