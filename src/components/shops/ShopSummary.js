import React from 'react'

const ShopSummary = ({shop}) => {
    return (
        <div className="card ">
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
                <h1 className="card-title">{shop.name}</h1>
                <h5 className="card-title">{shop.category} shop</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <button className="btn btn-primary">Go somewhere</button> */}
            </div>
        </div>
    )
}
export default ShopSummary