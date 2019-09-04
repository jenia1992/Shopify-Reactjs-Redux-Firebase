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
        if(props.fromCollection === "" || props.where1 === ""|| props.where2=== "" ||props.condition=== ""){
            return ([{ collection:"shops"}])
        }
        return ([{ collection:props.fromCollection,where:[props.where1,props.condition,props.where2]}])
        
        
    })
    )(Categories)