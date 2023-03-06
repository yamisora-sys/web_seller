import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer } from '@redux/reducers/UserReducer';
import { ProductReducer } from '@redux/reducers/ProductReducer';
const rootReducer = combineReducers({
    UserReducer,
    ProductReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));