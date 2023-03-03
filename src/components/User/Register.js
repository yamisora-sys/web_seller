import {userRegister} from '@redux/actions/UserActions';
import { useDispatch } from 'react-redux';
import { Notification } from '@components/Notification/Notification';
import ImgLogin from '../../assets/login.jpeg';

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
        <section class="vh-100 ">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" >
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block ">
                                        <img id = "imglogin" src={ImgLogin}
                                            alt="login form" class="img-fluid" />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3" ></i>
                                                    <span class="h1 fw-bold mb-0">COCO LEN</span>
                                                </div>

                                                <h5 class="fw-normal mb-3 pb-3">Sign into your account</h5>

                                                <div class="form-outline mb-4">
                                                    <input class="form-control form-control-lg" type="text" id="email" placeholder="Email" />
                                                    <label class="form-label" for="form2Example17">Email address</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input class="form-control form-control-lg" type="password" id="password" placeholder="Password" />
                                                    <label class="form-label" for="form2Example27">Password</label>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input class="form-control form-control-lg" type="password" id="confirmPassword" placeholder="Confirm Password" />
                                                    <label class="form-label" for="form2Example27">Confirm Password</label>
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button class="btn btn-dark btn-lg btn-block" type="button" onClick={SignIn}>Signin</button>
                                                </div>
                                                <p class="mb-5 pb-lg-2" >Already have an account? <a href="#!"
                                                >Login here</a></p>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}