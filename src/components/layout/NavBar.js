import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect} from 'react-redux'

const NavBar = (props) => {
    const {auth}=props
    const links=auth.uid?<SignedInLinks/>:<SignedOutLinks/>
    return (
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand"  to={"/"}>Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {links}
            
        </nav>

    )
}
const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(NavBar);