import React, { Component } from 'react';
import ShopList from '../shops/ShopList'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import ShopQuery from './ShopQuery'

class DashBoard extends Component {
    render() {
        // console.log('object', this.props)
        const { shops } = this.props
        return (
            <div className="container">
                <ShopQuery fromCollection="" where1="" condition="" where2="" />
                {/* <ShopQuery fromCollection="shops" where1="category" condition="==" where2="Clothes" /> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.firestore)
    return {
        shops: state.firestore.ordered.shops
    }
}
export default DashBoard