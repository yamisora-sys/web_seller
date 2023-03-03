import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
    USER_INFO,
} from '@redux/types/UserTypes';

var auth = {};

if(localStorage.getItem(USER_INFO)){
    auth = JSON.parse(localStorage.getItem(USER_INFO));
}


const initialState = {
    user: auth,
};

export function UserReducer (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            state.user = action.value;
            console.log(state.user);
            localStorage.setItem(USER_INFO, JSON.stringify(state.user));
            return {
                ...state
            };
        case USER_LOGOUT:
            state.user = {};
            localStorage.removeItem(USER_INFO);
            return {
                ...state
            };
        case USER_REGISTER:
            state.user = action.value;
            localStorage.setItem(USER_INFO, JSON.stringify(state.user));
            return {
                ...state,
            };
        default:
            return state;
    }
}