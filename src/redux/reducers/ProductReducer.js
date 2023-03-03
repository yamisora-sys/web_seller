import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    GET_ALL_PRODUCTS,
} from '@redux/types/ProductTypes'


const initialState = {
    products: [],
};

export function ProductReducer (state = initialState, action){
    switch (action.type) {
        case ADD_PRODUCT:
            state.products.push(action.value);
            return {
                ...state,
            };
        case EDIT_PRODUCT:
            state.products = state.products.map((product) => {
                if(product.id === action.value.id){
                    return action.value;
                }
                return product;
            }
            );
            return {
                ...state,
            };
        case DELETE_PRODUCT:
            state.products = state.products.filter((product) => {
                return product.id !== action.value;
            });
            return {
                ...state,
            };
        case GET_ALL_PRODUCTS:
            state.products = action.value;
            return {
                ...state,
            };
        default:
            return state;
    }
    
}