import React from 'react'
import ProductSummary from './ProductSumarry'
import {Link} from 'react-router-dom'
//row row-eq-height 
const ProductList = ({products}) => {
    return (
        <div className="row row-eq-height">
           
            {products && products.map((product) =>{
                return (
                    <div className=" col-md-6 col-lg-3 mt-4 text-center" key={product.productId}>
                    <ProductSummary  key={product.productId} product={product}  />
                    </div>
                )
            })}
            
        </div>
    )
}
export default ProductList
