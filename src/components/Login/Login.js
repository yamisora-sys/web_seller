import {userLogin} from '@redux/actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
export function Login () {
    const dispatch = useDispatch();
    const SignIn = () => {
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let userInfo = {
            email,
            password
        }
        dispatch(userLogin(userInfo));
    }
    return (
        <div>
            <input type="text" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button onClick={SignIn}>Sign In</button>
        </div>
    )
}