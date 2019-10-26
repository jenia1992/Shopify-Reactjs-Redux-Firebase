import authReducer from './authReducer'
import shopReducer from './shopReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import{ firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    shop: shopReducer,
    cart:cartReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
    
})
export default rootReducer