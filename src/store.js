import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {listReducer} from "./reducers/listReducer";

const reducer = combineReducers({
    lists: listReducer,
});

const listsItemFromStorage = localStorage.getItem('itemLists') ?
    JSON.parse(localStorage.getItem('itemLists')) : []

const initialState = {
    lists: {
        itemLists: listsItemFromStorage
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;