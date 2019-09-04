import * as actionType from './actionType'
import {storage} from '../../config/fbConfig'
export const createShop = (shop) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('shops').add({
            ownerId:getState().firebase.auth.uid,
            ...shop,
            createdAt: new Date(),
            

        }).then(() => {
            dispatch(updateCreateShop(shop))
        }).catch((err) => {
            dispatch(updateErrorShop(err))
        })

    }
}
export const updateCreateShop=(shop)=>{
    return {
        type:actionType.CREATE_SHOP,
        payload:shop
    }
}
export const updateErrorShop=(err)=>{
    return {
        type:actionType.CREATE_SHOP_ERROR,
        payload:err
    }
}

export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const auth = getState().firebase.auth
        firestore.collection("products").add({
            //product --> name,price,quantity,shopId
            ...product,
            ownerId:auth.uid,
            createdAt: new Date()
        }).then((productRes) => {
            console.log(productRes.id)
            firestore.collection("shops").doc(productRes.shopId).update({
                
            }).than(()=>{
                console.log("Created Product")

            dispatch(updateCreateProduct(product))
            })
            
        }).catch((err) => {
            dispatch(updateErrorProduct(err))
        })

    }
}
export const updateCreateProduct=(product)=>{
    return {
        type:actionType.CREATE_PRODUCT,
        payload:product
    }
}
export const updateErrorProduct=(err)=>{
    return {
        type:actionType.CREATE_PRODUCT_ERROR,
        payload:err
    }
}

export const getShopProducts = (shopId) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let productsArr=[]
        let shopsRef = getFirestore().collection('products');
        let query = shopsRef.where('shopId', '==', shopId).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }

                snapshot.forEach(doc => {
                    // console.log(doc.id, '=>', doc.data());
                    productsArr.push({productId:doc.id,...doc.data()})
                    
                });
                // console.log(productsArr)
                dispatch(updateGetProducts(productsArr))
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }
}
export const updateGetProducts=(productsArr)=>{
    return {
        type:actionType.GET_PRODUCTS,
        payload:productsArr
    }
}
export const updateUnSetProducts=()=>{
    return {
        type:actionType.UNSET_PRODUCTS,
        payload:null
    }
}

export const uploadImgToStorage=(imgdata)=>{
    // let randomInt=Math.floor(Math.random() * Math.floor(1000))
    // console.log(imgdata.name+randomInt)
      let a=imgdata.name.split(".")
      a[0]=a[0]+Math.floor(Math.random() * Math.floor(1000))
      let imageUniqeName=a.join(".")
   const uploadTask = storage.ref(`images/${imageUniqeName}`).put(imgdata);
  return dispatch =>{
      return new Promise((resolve,reject)=>{
        uploadTask.on('state_changed',(snapshot)=>{
            //progress function
        },(err)=>{
            console.log(err)
            dispatch({ type: 'URL_CREATE_ERROR',payload:err })
            reject(err)
        },()=>{
            //complete function
            storage.ref('images').child(imageUniqeName).getDownloadURL().then(url=>{
             dispatch({ type: 'URL_CREATED',payload:url })
            //  console.log(url)
             resolve({url:url,file:imageUniqeName})
            })
        })
  })
  
    }
}

export const unSetProducts=()=>{
    
   return dispatch =>{
       dispatch(updateUnSetProducts())
 
 }
}
 
//DELETE



export const deleteProduct = (product) => {
    console.log("PRODUCTTTT FILEEEEEEE",product.file)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
            getFirestore().collection("products").doc(product.productId).delete()

        const deleteTask = storage.ref(`images/${product.file}`)
        deleteTask.delete()

            let tempProducts= getState().shop.products && getState().shop.products.filter(p=>{
                
                return product.productId!==p.productId
            })
            console.log(tempProducts)
            dispatch({type:actionType.DELETE_PRODUCT,payload:tempProducts})
            
       
        
    }
}

 