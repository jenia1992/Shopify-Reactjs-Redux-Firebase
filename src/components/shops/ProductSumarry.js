import React from 'react'
import Rating from 'react-rating'
import startYellow from '../../images/yellow-star.svg'
import startBlue from '../../images/blue-star.svg'
import startGrey from '../../images/grey-star.svg'
const ProductSummary = ({ product, isUid,isCart, deleteProduct ,addProductToCart,rateProduct,productViews}) => {
    // console.log("!!!!!!!!!!!!!!!!!", product.productId || product.id)
    const raitingHandler=(p)=>{
        let res=(5*product.star5 + 4*product.star4 + 3*product.star3 + 2*product.star2 + 1*product.star1) / (product.star5+product.star4+product.star3+product.star2+product.star1)
        return res
    }
    return (

        <div className="card  h-100">
            <div className="img-hover-zoom">
            <img className="card-img-top mx-auto border-bottom myImg" src={product.url || "http://via.placeholder.com/150x150"} alt="Card image cap" />
            </div>
            <div className="card-body ">
                <p className="card-title font-weight-bold">{product.name.replace(/^\w/, c => c.toUpperCase())}</p>
                <h5 className="card-title">{product.price}$</h5>


                <Rating
                    placeholderRating={raitingHandler(product)}
                    emptySymbol={<img src={startGrey} style={{ height: "1.7em" }} />}
                    placeholderSymbol={<img src={startBlue} style={{ height: "1.7em" }} />}
                    fullSymbol={<img src={startYellow} style={{ height: "1.7em" }} />}
                    onClick={(value)=>rateProduct("star"+value,product)}
                />

                {/* BUTTONS */}
                <div className="d-flex justify-content-center">
                    {isCart ?null: <button onClick={() => addProductToCart(product)} className="btn btn-primary m-1"><i className="material-icons pt-1">add_shopping_cart</i></button>}
                    <button onClick={() => productViews(product)} type="button" className="btn btn-warning m-1" data-toggle="modal" data-target={`#${product.productId || product.id}` }>
                    <i className="material-icons pt-1">pageview</i>
                    </button>
                    {isUid && <button onClick={() => deleteProduct(product)} className="btn btn-danger m-1"><i className="material-icons pt-1">delete</i></button>}
                </div>

            </div>
            <div  className="modal fade" id={`${product.productId || product.id}` } tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                        <div style={{minWidth:"100%"}}  className="modal-dialog modal-dialog-centered" role="document">

                            <div style={{height:"90vh"}} className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title" id="ModalLongTitle">{product.name.replace(/^\w/, c => c.toUpperCase())}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    
                                <div className="card " >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                    <img className="card-img-top mx-auto border-bottom" src={product.url || "http://via.placeholder.com/150x150"} alt="Card image cap" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    

        </div>

    )
}
export default ProductSummary