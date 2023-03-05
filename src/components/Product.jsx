import React, { useState, useEffect } from 'react';
import imgCart from '../assets/img3.jpeg';
import Skeleton from "react-loading-skeleton";

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
                                    <img src={imgCart} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">Móc khóa con cá</h5>
                                            <p class="card-text lead fw-bold">40.000 đ</p>
                                            <a href="#!" class="btn btn-outline-primary ">Đặt hàng</a>
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