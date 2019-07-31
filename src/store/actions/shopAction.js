import {storage} from '../../config/fbConfig'
export const createShop = (shop) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('shops').add({
            ownerId:getState().firebase.auth.uid,
            ...shop,
            createdAt: new Date(),
            

        }).then(() => {
            dispatch({ type: 'CREATE_SHOP', shop: shop })
        }).catch((err) => {
            dispatch({ type: 'CREATE_SHOP_ERROR', err })
        })

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

            dispatch({ type: 'CREATE_PRODUCT', product: product })
            })
            
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_ERROR', err })
        })

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
                dispatch({type:"GET_PRODUCTS",productsArr})
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }
}
export const uploadImgToStorage=(imgdata)=>{
   const uploadTask = storage.ref(`images/${imgdata.name}`).put(imgdata);
//    return dispatch=>{
    
//    }
  return dispatch =>{
      return new Promise((resolve,reject)=>{
        uploadTask.on('state_changed',(snapshot)=>{
            //progress function
        },(err)=>{
            console.log(err)
            dispatch({ type: 'URL_CREATE_ERROR',err })
            reject(err)
        },()=>{
            //complete function
            storage.ref('images').child(imgdata.name).getDownloadURL().then(url=>{
             dispatch({ type: 'URL_CREATED',url })
            //  console.log(url)
             resolve(url)
            })
        })
  })
  }

}

export const unSetProducts=()=>{
    
   return dispatch =>{
       dispatch({type:"UNSET_PRODUCTS"})
 
 }
}
 
