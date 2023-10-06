import React from "react";

function Body() {
    function goToPage2() {
        
    }
    return(
        <div className="hero-area hero-style-three">
        <img alt="Banner image" src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-anime-buon_103502006.jpg" className="home3-banner img-fluid" style={{height: '550px', objectFit: 'contain', minWidth: '50%'}}/>
        <div className="container-lg container-fluid">
            <div className="row d-flex justify-content-start align-items-end">
                <div className="col-xl-5 col-lg-5 px-0">
                    <div className="banner3-content">
                        <span className="wow animated">
                            Chào mừng bạn đến với ABC Auction
                        </span>
                        <h1 className="wow animated">
                            Nền tảng đấu giá trực tuyến hàng đầu Việt Nam
                        </h1>
                        <p className="wow animated">
                            Tự hào là một trong những nhà đấu giá lớn nhất tại Việt Nam, ABC Auction luôn là đơn vị tiên phong ứng dụng công nghệ thông tin vào hoạt động đấu giá, mở ra 1 chương mới cho hoạt động đấu giá nước nhà.
                        </p>
                        <button onClick={goToPage2} className="eg-btn btn--primary3 btn--lg wow fadeInUp" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.8s'}} aria-label="Khám phá ABC Auction">khám phá</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Body;