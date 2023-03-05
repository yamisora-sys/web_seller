import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-while py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4 fas fa-cubes fa-1x me-3 " id="logo" href="#!">
                        COCO LEN
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#!">Trang chủ</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#!">Sản phẩm</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#!">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#!">Liên hệ</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="#!" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-sign-in me-1'></i>Đăng nhập</a>
                            <a href="#!" className="btn btn-outline-dark ms-2 ">
                                <i className='fa fa-user-plus me-1'></i>Đăng ký</a>
                            <a href="#!" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-shopping-cart me-1'></i>Giỏ hàng (0) </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;