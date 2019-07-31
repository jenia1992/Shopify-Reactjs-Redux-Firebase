import React from 'react'
import ShopSummary from './ShopSummary'
import {Link} from 'react-router-dom'
const ShopList = ({shops}) => {
    return (
        <div className="row row-eq-height ">
            {shops && shops.map((shop) =>{
                return (
                    <Link className="col-sm-12 col-md-4 mt-4" to={'/shop/'+shop.id} key={shop.id}>
                    <ShopSummary shop={shop}  />
                    </Link>
                )
            })}
            
        </div>
    )
}
export default ShopList
