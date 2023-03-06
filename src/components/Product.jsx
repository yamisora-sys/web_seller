import React, { useState, useEffect } from 'react';
import imgCart from '../assets/img3.jpeg';
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';

const Product = () => {
    // const Loading = () => {
    //     return (
    //         <>
    //            <div className="col-md-3">
    //                <Skeleton height ={350}/>
    //            </div>
    //         </>
    //     )
    // }

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark">Tất cả</button>
                    <button className="btn btn-uotline-dark">Áo len</button>
                    <button className="btn btn-uotline-dark">Mũ len</button>
                    <button className="btn btn-uotline-dark"> Quà lưu niệm</button>
                    <button className="btn btn-uotline-dark">Móc khóa len</button>
                    <button className="btn btn-uotline-dark"> Đan len</button>
                </div>
                {/* {filter.map((product) => {
                    return (
                        <> */}
                            <div className="col-md-3 mb-4">
                                <div id="productsCart" class="card h-100 text-center p-4" /* key={product.id} */>
                                    <img src="https://img.cdn.vncdn.io/cdn-pos/cba2a3-7534/ps/20221014_9OJmGRgsVHsABdBzUjzkTCY5.JPG" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">Mũ len tai gấu</h5>
                                            <p class="card-text lead fw-bold">150.000 đ</p>
                                            <NavLink to={'/product/:id'} class="btn btn-outline-primary ">Đặt hàng</NavLink>
                                        </div>
                                </div>
                            </div>
                        {/* </>
                    )
                })
                } */}
            </>
        )

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 class="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row jusstify-content-center">
                    {<ShowProducts />}
                </div>
            </div>
        </div>
    );
}

export default Product;