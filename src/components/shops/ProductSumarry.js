import React from 'react'
import Rating from 'react-rating'
import startYellow from '../../images/yellow-star.svg'
import startBlue from '../../images/blue-star.svg'
import startGrey from '../../images/grey-star.svg'
const ProductSummary = ({ product }) => {
    
    return (
        
        <div className="card ">
            <img className="card-img-top mx-auto" src={product.url || "http://via.placeholder.com/150x150"} alt="Card image cap" />
            <div className="card-body">
                <h3  className="card-title">{product.name}</h3>
                <h5  className="card-title">{product.price}$</h5>

                
                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<img src={startGrey} style={{height:"1.7em"}} />}
                    placeholderSymbol={<img src={startBlue} style={{height:"1.7em"}} />}
                    fullSymbol={<img src={startYellow} style={{height:"1.7em"}}  />}
                />
               

                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <div className="d-flex justify-content-center">
                <button className="btn btn-primary m-1">Add to cart</button>
                <button className="btn btn-warning m-1">View</button>
                </div>
                
            </div>
        </div>
       
    )
}
export default ProductSummary