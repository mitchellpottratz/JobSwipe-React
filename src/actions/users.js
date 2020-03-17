import apiURL from './config.js';
import * as types from '../constants/actionTypes.js';
import usersAPI from '../api/usersApi.js';


export const registerUser = (registrationData) => async (dispatch) => {
    const response = await usersAPI.registerUser(registrationData);

    
    
    console.log('response:', response);
}



