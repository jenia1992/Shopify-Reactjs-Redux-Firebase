export const signIn =()=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase =getFirebase();
        const firestore=getFirestore();
        let base_provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(base_provider)
        .then((res)=>{   
         return firestore.collection('users').doc(res.user.uid).set({
             name:res.user.displayName,
             email:res.user.email,
             photourl:res.user.photoURL
         })
         
        }).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch(err=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
      }
    }
export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
    }
}