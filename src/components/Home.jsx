import React from 'react';
import ImgBanner from '../assets/img4.jpeg'
const Home = () => {
    return (
        <div>
            <div class="card text-bg-dark">
                <img src={ImgBanner} class="card-img" alt="Background"
                height="550px"/>
                    <div class="card-img-overlay">
                        <div className="container">
                        <h2 class="card-title">COCO LEN</h2>
                        <h6 class="card-text">Cửa hàng cung cấp các sản phẩm làm từ LEN.</h6>
                        <h6 class="card-text"> Mang đến cho khách hàng những trải nghiệm thật thú vị khi đến với cửa hàng chúng tôi...</h6>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Home;