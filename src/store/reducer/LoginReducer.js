import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const intialState = {
    token: null,
    userId: null,
    error: null,
    isLoading: false
};

const loginStart = ( state, action ) => {
    return updateObject( state, { error: null, isloading: true } );
};

const loginSucess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        isLoading: false
     } );
};

const loginFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        isLoading: false
    });
}


const reducer = ( state = intialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSucess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        default:
            return state;
    }
};
export default reducer;

