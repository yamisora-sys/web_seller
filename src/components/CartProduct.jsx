import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const CartProduct = () => {

    // const {id}=useParams();
    // const [product,setCartProduct] = useState([]);
    // const [loading,setLoading] = useState(false);

    // useEffect(()=>{
    //     const getCartProduct= async () =>{
    //         setLoading(true);
    //         const response = await fetch('#!${id}');
    //         setCartProduct(await response.json());
    //         setLoading(false);
    //     }
    //     getCartProduct();
    // },[] ) ; 

    const Loading = () => {
        return (
            <>

                loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div >
                    <div className="col-md-6">
                        <img src="https://img.cdn.vncdn.io/cdn-pos/cba2a3-7534/ps/20221014_9OJmGRgsVHsABdBzUjzkTCY5.JPG" alt="..."
                            height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50">Mũ len</h4>
                        <h1 className="display-5">Mũ len tai gấu </h1>
                        <p className="lead fw-bolder">
                            Đánh giá...
                            <i className="fa fa-start"></i>
                        </p>
                        <h3 className="display-6 fw-bold my-4">150.000 đ</h3>
                        <p className="lead">Mũ len được đan thủ công tại Việt Nam với thương hiệu COCO LEN đã bán hơn 1tr đơn sau khi thành lập được hơn 3 tháng</p>
                        <button className="btn btn-outline-dark">
                            Thêm vào giỏ hàng
                        </button>
                        <NavLink to="/cart" className="btn btn-dark">
                            Đến giỏ hàng
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {<ShowProduct />}
                </div>

            </div>
        </div>
    );
}

export default CartProduct;