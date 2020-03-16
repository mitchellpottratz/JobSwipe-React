

const initialState = {
    isLoggedIn: false,
    isCompanyUser: false,
    isCandidateUser: false,
    userInfo: {}
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        
        default:
            return state;
    }
}


export default usersReducer; 

