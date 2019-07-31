import React, { Component } from 'react';
import ShopList from '../shops/ShopList'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


class Categories extends Component {

    componentDidMount(){
        console.log(this.props)
        // console.log(this.props.orderedRes)
        // this.prop.cat = this.props.cat;
    }    
    render() {
        
        return (
            <div >
                <ShopList shops={this.props.orderedRes} />
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("CATEGORIES!!!=>",state.firestore)
    return {
        orderedRes: state.firestore.ordered.shops
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props)=>{
        if(props.cat !== ""){
            return ([{ collection:"shops",where:["category","==",props.cat]}])
        }
        return ([{ collection:"shops"}])
        
    })
    )(Categories)