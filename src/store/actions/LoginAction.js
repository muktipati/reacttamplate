import axios from 'axios';
import * as actionTypes from './actionTypes';
// import { browserHistory } from 'react-router';


export const loginStart = () =>{
   
    return {
        type:actionTypes.LOGIN_START,
    };
};
export const loginSuccess = (token,userId) =>{
    return {
        
        type: actionTypes.LOGIN_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const loginFail = (error) =>{
    return {
        type:actionTypes.LOGIN_FAIL,
        error:error
    };
};

export const login = (email,password) =>{
return dispatch =>{
    dispatch(loginStart());
    const loginData = {
        email:email,
        password:password,
        returnSecureToken:true
    }
    axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCfXUUWT4ot-42hPJo9dMUvM8-FLIj4WBc",loginData)
    .then(response =>{
        console.log("login",response)
       
        dispatch(loginSuccess(response.data.idToken, response.data.localId));
       
    })
    .catch(error =>{
        console.log("login error",error.response.data.error.message)
        dispatch(loginFail(error.response.data.error.message))
    })
}
}