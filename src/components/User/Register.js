import {userRegister} from '@redux/actions/UserActions';
import { useDispatch } from 'react-redux';
import { Notification } from '@components/Notification/Notification';

export function Register () {
    const dispatch = useDispatch();
    const SignIn = () => {
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            Notification('Password and Confirm Password must be the same', 'error');
            return;
        }
        let userInfo = {
            email,
            password
        }
        console.log(userInfo);
        dispatch(userRegister(userInfo));
    }
    return (
        <div>
            <input type="text" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <input type="password" id="confirmPassword" placeholder="Confirm Password" />
            <button onClick={SignIn}>Sign In</button>
        </div>
    )
}