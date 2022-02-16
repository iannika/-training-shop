import React from "react";

// import truck from "../../assets/img/icons/truck.png";
// import refresh from "../../assets/img/icons/refresh.png";

// import support from "../../assets/img/icons/support.png";



import "./secondPart.css";

const SecondPart = () => {
    return (
        <div className="container-advantage">
            <div className="free-shipping">
                {/* <img className="img-free-shipping" src={truck} alt='img'/> */}
                <div className="free-shipping-img"></div>
                <div className="text-advantage">
                    <span className="title-advantage">FREE SHIPPING</span>
                    <span className="sub-title-advantage">On all UA order or order above $100</span>
                </div>
            </div>
            <div className="days-return">
                {/* <img className="img-days-return" src={refresh} alt='img'/> */}
                <div className="days-return-img"></div>
                <div className="text-advantage">
                    <span className="title-advantage">30 DAYS RETURN</span>
                    <span className="sub-title-advantage">Simply return it within 30 days for an exchange</span>
                </div>
            </div>
            <div className="support">
                {/* <img className="img-support" src={support} alt='img'/> */}
                <div className="support-img"></div>
                <div className="text-advantage">
                    <span className="title-advantage">SUPPORT 24/7</span>
                    <span className="sub-title-advantage">Contact us 24 hours a day, 7 days a week</span>
                </div>
            </div>
        </div>
    )
}

export {SecondPart}