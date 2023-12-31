import React from "react";
import ScrollButton from "./ScrollButton";

function Body() {
    function goToPage2() {
        
    }
    return(
        <body id="body-body">
        <div className="hero-area hero-style-three">
        <img alt="Banner image" src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-anime-buon_103502006.jpg" className="home3-banner img-fluid" style={{height: '550px', objectFit: 'contain', minWidth: '50%'}}/>
        <div className="container-lg container-fluid">
            <div className="row d-flex justify-content-start align-items-end">
                <div className="col-xl-5 col-lg-5 px-0">
                    <div className="banner3-content">
                        <span className="wow animated">
                            <h1>Welcome to ABC Auction</h1>
                        </span>
                        <h3 className="wow animated">
                        Vietnam's leading online auction platform
                        </h3>
                        <p className="wow animated">
                        Proud to be one of the largest auction houses in Vietnam, 
                         Auction has always been a pioneer in applying information technology to auction activities,
                          opening a new chapter for the country's auction activities.
                        </p>
                        <button onClick={goToPage2} className="eg-btn btn--primary3 btn--lg wow fadeInUp" style={{visibility: 'visible', animationDuration: '2s', animationDelay: '0.8s'}} aria-label="Khám phá ABC Auction">Discover</button>
                        <ScrollButton />
                    </div>
                </div>
            </div>
        </div>
      </div>
      </body>
    );
}

export default Body;