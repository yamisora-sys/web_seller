import React from 'react';
import ImgBanner from '../assets/img4.jpeg'
const Home = () => {
    return (
        <div>
            <div class="card text-bg-dark">
                <img id="imgBanner" src={ImgBanner} class="card-img shadow-6" alt="Background"
                height="600px"/>
                    <div id ="textBanner"class="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">COCO LEN  </h5>
                        <h6 class="card-text ">Cửa hàng cung cấp các sản phẩm làm từ LEN.</h6>
                        <h6 class="card-text"> Mang đến cho khách hàng những trải nghiệm thật thú vị khi đến với cửa hàng chúng tôi...</h6>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Home;