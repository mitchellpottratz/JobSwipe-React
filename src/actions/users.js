import * as types from '../constants/actionTypes.js';
import usersAPI from '../api/usersApi.js';


export const registerUser = (registrationData) => async (dispatch) => {
    const response = await usersAPI.registerUser(registrationData);
    return response;
}


export const loginUser = (loginData) => async (dispatch) => {
    const response = await usersAPI.loginUser(loginData);

    if (response.status.code === 200) {
        dispatch({
            type: types.LOGIN_USER,
            payload: response.data
        });
    }
    
    return response;
} 




