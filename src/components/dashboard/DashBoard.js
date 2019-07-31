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
            <div className="row">
                <ShopQuery cat={""} />
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