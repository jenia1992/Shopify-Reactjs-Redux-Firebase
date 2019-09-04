import React from 'react'
import Rating from 'react-rating'
import startYellow from '../../images/yellow-star.svg'
import startBlue from '../../images/blue-star.svg'
import startGrey from '../../images/grey-star.svg'
const ProductSummary = ({ product, isUid, deleteProduct }) => {
    // console.log("!!!!!!!!!!!!!!!!!", product.productId)
    return (

        <div className="card ">
            <img className="card-img-top mx-auto border-bottom" src={product.url || "http://via.placeholder.com/150x150"} alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">{product.name.replace(/^\w/, c => c.toUpperCase())}</h3>
                <h5 className="card-title">{product.price}$</h5>


                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<img src={startGrey} style={{ height: "1.7em" }} />}
                    placeholderSymbol={<img src={startBlue} style={{ height: "1.7em" }} />}
                    fullSymbol={<img src={startYellow} style={{ height: "1.7em" }} />}
                />


                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary m-1"><i className="material-icons pt-1">add_shopping_cart</i></button>
                    <button type="button" className="btn btn-warning m-1" data-toggle="modal" data-target="#ModalCenter">
                    <i className="material-icons pt-1">pageview</i>
                    </button>
                    {isUid && <button onClick={() => deleteProduct(product)} className="btn btn-danger m-1"><i className="material-icons pt-1">delete</i></button>}
                </div>

            </div>
            <div  className="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                        <div style={{minWidth:"100%"}}  className="modal-dialog modal-dialog-centered" role="document">

                            <div style={{height:"90vh"}} className="modal-content">

                                <div className="modal-header">
                                    <h5 claclassNamess="modal-title" id="ModalLongTitle">{product.name.replace(/^\w/, c => c.toUpperCase())}</h5>
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