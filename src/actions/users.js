import * as types from '../constants/actionTypes.js';
import usersAPI from '../api/usersApi.js';


export const registerUser = (registrationData) => async (dispatch) => {
    const response = await usersAPI.registerUser(registrationData);
    return response;
}


export const loginUser = (loginData) => async (dispatch) => {
    console.log('login action');
    console.log('login data:', loginData);

    const response = await usersAPI.loginUser(loginData);
    console.log('response in action:', response);

    return response;
} 




