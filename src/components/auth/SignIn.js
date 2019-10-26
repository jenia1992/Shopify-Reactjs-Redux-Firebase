import React, { Component } from 'react';
import styles from './signin.module.css';
import { connect } from 'react-redux'
import * as actionType from '../../store/actions/index'
import {Redirect} from 'react-router-dom'
import { isFulfilled } from 'q';
class SignIn extends Component {
    render() {
        const { authError,auth } =this.props
        
        return (
            // <div className="row text-center mt-5">
            //     <div className="col mt-5">
            //         <button onClick={this.props.signIn} className="btn btn-primary ">SignIn with Google</button>
            //     </div>
            //     <div>
            //         {authError ? <p style={{color:"red"}}>{authError}</p>:null}
            //     </div>

            // </div>
            
            <div className={styles.body}>
                {auth.uid&&<Redirect to={{pathname: "/dashboard",
            // state: {  }
}}></Redirect>}
                
                <header id={styles.showcase}>
                    <h1>Welcome To Shopify Ecommerce Site </h1>
                </header>
                <div id={styles.content} className={styles.container}>
                ypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release

                </div>
                

                <button onClick={this.props.signIn} className={styles.btn}>
                <img className="pr-2" style={{widows:"20px",height:"2vh"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                    SignIn with Google</button>
                


            <div>
                {authError ? <p style={{color:"red"}}>{authError}</p>:null}
            </div>
            
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(actionType.signIn())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
