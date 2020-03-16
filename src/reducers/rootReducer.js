import { combineReducers } from "redux";

// reducer imports 
import usersReducer from './usersReducer.js';


const rootReducer = combineReducers({
    user: usersReducer
});


export default rootReducer;



