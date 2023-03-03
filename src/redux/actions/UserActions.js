import {auth, db} from '@redux/Firebase';
import {
    userDB,
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
} from '@redux/types/UserTypes';
import {Notification} from '@components/Notification/Notification';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import {setDoc, getDoc, doc} from 'firebase/firestore';

export function userLogin (userInfo) {
    return async (dispatch) => {
        try {
            const {email, password} = userInfo;
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const docRef = doc(db, userDB, user.uid);
                    getDoc(docRef)
                        .then((doc) => {
                            if (doc.exists()) {
                                user.role = doc.data().role;
                                console.log(user);
                            }
                        })
                    dispatch({
                        type: USER_LOGIN,
                        value: user
                    })
                    Notification('User logged in successfully', 'success');
                })
        } catch(error) {
            Notification(error.message, 'error');
        }
    }
}

export function userRegister (userInfo) {
    return async (dispatch) => {
        try {
            const {email, password} = userInfo;
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const docRef = doc(db, userDB, user.uid);
                    userInfo.role = "admin";
                    console.log(userInfo);
                    setDoc(docRef, {
                        uid: user.uid,
                        role: userInfo.role
                    });
                    updateProfile(user, {
                        displayName: user.uid,
                        photoURL: "https://png.pngtree.com/png-clipart/20201205/ourlarge/pngtree-cartoon-couple-avatar-wearing-hat-png-image_2511138.jpg"
                    })
                    Notification('User registered successfully', 'success');
                    dispatch({
                        type: USER_REGISTER,
                        value: user
                    })
                })
                .catch((error) => {
                    Notification(error.message, 'error');
                });
        } catch (error) {
            console.log(error);
            Notification(error.message, 'error');
        }
    };
}

export function userLogout () {
    return async (dispatch) => {
        try {
            await signOut(auth)
                .then(() => {
                    dispatch({
                        type: USER_LOGOUT,
                        value: {}
                    })
                    Notification('User logged out successfully', 'success');
                })
        } catch (error) {
            Notification(error.message, 'error');
        }
    }
}

export function updateUser () {
    return async (dispatch) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: "John Doe",
                photoURL: "https://png.pngtree.com/png-clipart/20201205/ourlarge/pngtree-cartoon-couple-avatar-wearing-hat-png-image_2511138.jpg"
            })
                .then(() => {
                    Notification('Profile updated successfully', 'success');
                })
        } catch (error) {
            Notification(error.message, 'error');
        }
    }
}