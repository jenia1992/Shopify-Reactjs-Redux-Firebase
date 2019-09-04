import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
    const {auth}=props
    // console.log(auth)
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* left side links */}
            <ul className="navbar-nav mr-auto">
                <li className="nav-item nav-link" ><Link to={"/createshop"}>Create Shop</Link></li>
                
            </ul>
            {/* right side links*/}
            <ul className="navbar-nav ">
                <li className="nav-item nav-link" ><a style={{color:"red"}} onClick={props.signOut}>LogOut </a></li>
                <li><Link to={"/"}><img className="rounded-circle" src={auth.photoURL} style={{height:"35px"}} alt="..."/></Link></li>
            </ul>
        </div>
        
    )
}
const mapStateToProps=(state)=>{
    // console.log(state)
    return{
        auth: state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);