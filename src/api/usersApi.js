


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
    } 
    
}

