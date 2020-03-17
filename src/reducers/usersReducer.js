

const initialState = {
    isLoggedIn: false,
    emailIsConfirmed: false,
    userInfo: {}
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        
        default:
            return state;
    }
}


export default usersReducer; 

