import { combineReducers } from "redux";
import authReducer from "./auth";
import CurrentUserReducer from "./currentUser";
import chanelReducers from "./chanel";

export default combineReducers({
   authReducer, CurrentUserReducer, chanelReducers,
});