import * as actionType from "./actionType"
import { async } from "@firebase/util";


export const addProductToCart = (product) => {
    console.log("PRODUCT ==>>",product.productId)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const uid = getState().firebase.auth.uid
        
        firestore.collection("users").doc(uid).collection("cart").add({
            //product --> name,price,quantity,shopId
            productRef:product.productId || product.id
            
        }).then(()=>{
            dispatch(getProductsFromCart())
            
            
        }).catch((err)=>{
            dispatch({type:"ADD_PRODUCT_TO_CART_ERROR",payload:err})
        })

    }
}

export const getProductsFromCart = ()=>{
    return ( dispatch,getState,{getFirebase,getFirestore})=>{
        const uid = getState().firebase.auth.uid
        if(!uid) return
        let cartArr=[]
        let totalPrice=0
        getFirestore().collection("users").doc(uid).collection("cart").get().then(snapshop=>{
            let size=snapshop.size
            snapshop.docs.forEach((doc,i)=>{
                getFirestore().collection("products").doc(doc.data().productRef).get().then(snapp=>{
                    let tempProd={...snapp.data(),productId:doc.id}
                    totalPrice=totalPrice+parseInt(tempProd.price)
                    cartArr.push(tempProd)
                    if(i+1===size){
                        dispatch({type:actionType.GET_PRODUCT_FROM_CART,payload:{cartArr,size,totalPrice}})
                    }
                })
            })
        }) 
    }
}

export const deleteProductFromCart = (product) => {
    // console.log("PRODUCTTTT FILEEEEEEE",product)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const uid = getState().firebase.auth.uid
        let totalPrice=0
        getFirestore().collection("users").doc(uid).collection("cart").doc(product.productId ).delete()

            let cartArr= getState().cart.cart && getState().cart.cart.filter(p=>{
                return product.productId!==p.productId
            })
            totalPrice+=cartArr.map(p=>{
                return parseInt(p.price)
            })
            
            let size = cartArr.length
            // console.log("paaaaaaaaaaaaaakaaaaaaaaa",totalPrice)
            dispatch({type:actionType.DELTE_PRODUCT_FROM_CART,payload:{cartArr,size,totalPrice}})
            
        
    }
}

export const checkOut=()=>{
    console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
    return ( dispatch,getState,{getFirebase,getFirestore})=>{
        const uid = getState().firebase.auth.uid
        let increment = getFirebase().firestore.FieldValue.increment(1)

        getFirestore().collection("users").doc(uid).collection("cart").get().then(snapshop=>{
            snapshop.docs.forEach((doc,i)=>{
                console.log(doc.id,i)
                getFirestore().collection("products").doc(doc.data().productRef).update({sold:increment})
                getFirestore().collection("users").doc(uid).collection("cart").doc(doc.id).delete()
                dispatch({type:actionType.CHECK_OUT,payload:{cartArr:[],size:0,totalPrice:0}})
            })
            
        }) 
    }
}