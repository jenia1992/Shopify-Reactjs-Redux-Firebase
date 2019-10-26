import React from 'react'

const ShopSummary = ({shop}) => {
    return (
        <div className="card h-100">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
                <h1 className="card-title">{shop.name}</h1>
                <h5 className="card-title">{shop.category} shop</h5>
                <p className="card-text">{shop.about}</p>
                {/* <button className="btn btn-primary">Go somewhere</button> */}
            </div>
        </div>
    )
}
export default ShopSummary