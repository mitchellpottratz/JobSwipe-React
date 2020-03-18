import apiURL from './config.js';


export default {

    // registers a new candidate or company user
    registerUser: async (registrationData) => {
        try {
            const response = await fetch(apiURL + 'users/register', {
                method: 'POST',
                credentials: 'include',
                body: registrationData,
            });
            const parsedResponse = await response.json();
            return parsedResponse;
            
        } catch (error) {
            // TODO - handle the error
            console.log('error while registering:', error);
        }
    },
    
    // verifies a users email address so they can now login
    verifyEmailAddress: async (emailConfirmationCode) => {
        try {
            const response = await fetch(apiURL + 'users/verify-email/' + emailConfirmationCode, {
                method: 'GET',
                credentials: 'include',
            });
            const parsedResponse = await response.json();
            return parsedResponse;

        } catch (error) {
            // TODO - handle the error
            console.log('error while verifying email:', error);
        }
    },

    // logs in a candidate or company user
    loginUser: async (loginData) => {
        try {
            const response = await fetch(apiURL + 'users/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData),
            });
            const parsedResponse = await response.json();
            return parsedResponse;

        } catch (error) {
            // TODO - handle the error
            console.log('error while logging in:', error);
        }
    }
}

