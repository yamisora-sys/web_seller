import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer } from '@redux/reducers/UserReducer';
const rootReducer = combineReducers({
    UserReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));