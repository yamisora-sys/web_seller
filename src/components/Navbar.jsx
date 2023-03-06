import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-while py-3 shadow-sm">
                <div class="container">
                    <NavLink class="navbar-brand fw-bold fs-4 fas fa-cubes fa-1x me-3 " id="logo" to="/">
                        COCO LEN
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id ="navhead" class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active " aria-current="page" to="/">Trang chủ</NavLink>
                            </li>

                            <li class="nav-item" >
                                <NavLink class="nav-link  " to="/product">Sản phẩm</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink class="nav-link" to="/blog">Blog</NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink class="nav-link" to="/about">Liên hệ</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-sign-in me-1'></i>Đăng nhập</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2 ">
                                <i className='fa fa-user-plus me-1'></i>Đăng ký</NavLink>
                            <NavLink to="cart" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-shopping-cart me-1'></i>Giỏ hàng (0) </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;