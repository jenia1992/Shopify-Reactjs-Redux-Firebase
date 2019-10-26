import * as actionType from "./actionType"
import { Redirect} from 'react-router-dom'
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
            dispatch(updateSuccess())
        }).catch(err=>{
            dispatch(updateError(err))
        })
      }
    }
    export const updateSuccess=()=>{
        return {
            type:actionType.LOGIN_SUCCESS,
            payload:null
        }
    }
    export const updateError=(err)=>{
        return {
            type:actionType.LOGIN_ERROR,
            payload:err
        }
    }
export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch(updateSignOut())
            
        })
    }
}
export const updateSignOut=()=>{
    return {
        type:actionType.LOGIN_SUCCESS,
        payload:'SIGNOUT_SUCCESS'
    }
}

export const updateDashBoardForm=(form)=>{
    return {
        type:actionType.DASHBOARD_FORM_UPDATE,
        payload:form
    }
}