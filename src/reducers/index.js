import changeNumber from './upDown';

// To combine multipe reducers 
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber
});

export default rootReducer;