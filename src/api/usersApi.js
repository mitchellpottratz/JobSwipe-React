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
            console.log('error while registering:', error);
        }
    },
    
    // verifies a users email address so they can now login
    verifyEmailAddress: async (emailConfirmationCode) => {
        console.log('verify email address api call');

        try {
            const response = await fetch(apiURL + 'users/verify-email/' + emailConfirmationCode, {
                method: 'GET',
                credentials: 'include',
            });
            const parsedResponse = await response.json();
            console.log('verify email response:', parsedResponse);

            return parsedResponse;
        } catch (error) {
            console.log('error while registering:', error);
        }
    }

}

