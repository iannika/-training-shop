import React from "react";
import { Product } from "../product/product";
import { productType } from "../../data/PRODUCT_TYPE";
import { buttons } from "../../data/BUTTONS";

import "./categories.css";

const Categories = () => {

    return (
        <>
            {productType.map(productType => (
                 <div className="category" data-test-id={`category-${productType}`} key={productType}>
                    <div className="category-wrapper-title">
                        <div className="category-title">{productType.toUpperCase()}{"'S"}</div>
                        <div className="category-filter-menu">
                            {buttons.map(btnName => (
                                 <button className="category-filter-btn" key={btnName}>{btnName}</button>
                            ))}
                        </div>
                    </div>
                    <div className="category-card">
                        <Product productType={productType} />
                    </div>
                    <div className="category-btn-see-all"><button>SEE ALL</button></div>
                </div>
            ))}
        </>
    )
}

export {Categories}