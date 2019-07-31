const initState = {
    authError:null
}
const authReducer = (state = initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'Login failed'
            };
        case 'LOGIN_SECCESS':
            console.log('login success')
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
        default:
            return state;
    }
}
export default authReducer