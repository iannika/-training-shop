import React from "react";

import "./specialOffer.css";

const SpecialOffer = () => {
    return (
        <div className="container-special-offer">
            <div className="special-offer-wrapper">
                <div className="special-offer-img-woman"></div>
                <div className="special-offer-form">
                    <div className="special-offer-form_text">
                        <span className="title">Special Offer</span>
                        <div className="text">Subscribe <br/> And <span style={{color: '#E91E63'}}>Get 10% Off</span></div>
                    </div>
                    <form className="special-offer-form_form">
                        <input typeof="text" placeholder="Enter your email"></input>
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className="special-offer-img-man"></div>
            </div>
        </div>
    )
}

export {SpecialOffer}