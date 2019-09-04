import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto">
                
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item nav-link" ><Link to={"/"}>Login</Link></li>  
            </ul>
        </div>

    )
}
export default SignedOutLinks;