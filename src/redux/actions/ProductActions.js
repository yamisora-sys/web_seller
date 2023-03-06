import {db, storage} from '@redux/Firebase'
import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    GET_ALL_PRODUCTS,
    productDB
} from '@redux/types/ProductTypes'
import { setDoc, getDoc, doc, query, where, onSnapshot, getDocs, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Notification } from '@components/Notification/Notification';

export const addProduct = (product) => {
    return async (dispatch) => {
        try {
            const imgRef = ref(storage, `images/${product.id}`);
            await uploadBytes(imgRef, product.image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    product.image = url;
                });
            });
            const docRef = doc(db, productDB, product.id);
            await setDoc(docRef, product).then((doc) => {
                Notification('Product added successfully', 'success');
                dispatch({
                    type: ADD_PRODUCT,
                    value: product
                })
            })
        } catch (e) {
            console.error('Error adding document: ', e);
            Notification('Error adding product', 'error');
        }
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, productDB));
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push(doc.data());
            });
            dispatch({
                type: GET_ALL_PRODUCTS,
                value: products
            })
        } catch (e) {
            console.error('Error getting documents: ', e);
            Notification('Error getting products', 'error');
        }
    }
}