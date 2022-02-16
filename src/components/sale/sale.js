import React from "react";

import "./sale.css";

const Sale = () => {
    return (
        <div className="container-sale">
            <div className="sale-new">
                <div className="new">
                    <span>New Season</span>
                    <span className="text">lookbook collection</span>
                </div>
            </div>
            <div className="new-sale">
                <div className="sale">
                    <span>Sale</span>
                    <div className="text">Get UP to <span className="text" style={{color: '#E91E63', display: 'inline'}}>50% off</span></div>
                </div>
            </div>
        </div>
    )
}

export {Sale}