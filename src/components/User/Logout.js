import {userLogout} from '@redux/actions/UserActions';
import { useDispatch } from 'react-redux';


export function Logout () {
    const dispatch = useDispatch();
    const SignOut = () => {
        dispatch(userLogout());
    }
    return (
        <div>
            <i className="fa-solid fa-right-from-bracket" onClick={SignOut}></i>
        </div>
    )
}