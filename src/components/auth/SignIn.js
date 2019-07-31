import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
class SignIn extends Component {
    render() {
        const { authError } =this.props
        return (
            <div className="row text-center mt-5">
                <div className="col mt-5">
                    <button onClick={this.props.signIn} className="btn btn-primary ">SignIn with Google</button>
                </div>
                <div>
                    {authError ? <p style={{color:"red"}}>{authError}</p>:null}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("SignIn Component",state)
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
