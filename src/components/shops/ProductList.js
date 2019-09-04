import React from 'react'
import ProductSummary from './ProductSumarry'
import {Link} from 'react-router-dom'
//row row-eq-height 
const ProductList = ({products,isUid,deleteProduct}) => {
    const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
let chunkProd= products && chunk(products, 4)

    
    return (
        <div> 
           
            {chunkProd && chunkProd.map((arr,i) =>{
               

                return(
                    <div key={i} className="row row-eq-height bg-light mt-1 rounded">
                {arr.map(product=>{
                    //  console.log(product)
                    return(
                        <div className=" col-md-6 col-lg-3 mt-2 mb-2 text-center" key={product.productId}>
                            <ProductSummary isUid={isUid} deleteProduct={deleteProduct} key={product.productId} product={product}  />
                        </div>
                    )
                })}
                </div>
                )


                
            })}
            
        </div>
    )
}
export default ProductList
