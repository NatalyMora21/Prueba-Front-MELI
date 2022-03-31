import { itemReducer } from "./reducers/itemReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
    items: itemReducer,
})

//Store
export const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
);