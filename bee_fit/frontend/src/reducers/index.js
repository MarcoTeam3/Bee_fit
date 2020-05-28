import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";

import errors from './errors';
import messages from './messages'
import auth from './auth'; 

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    errors,
    messages,
});

export default rootReducer;