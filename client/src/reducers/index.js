import { combineReducers } from "redux";
import authReducer from "./authReducer";
//import the ready-made reducer from redux form and combine it with a (strictly) form key.
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
