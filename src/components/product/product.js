import React from "react";
import { Link } from "react-router-dom";
import {PRODUCTS} from "../../data/PRODUCTS";
import stars from '../../assets/img/stars.png';

import "./product.css";

const Product = (productType) => {
    const typeProduct = Object.values(productType).join();
    console.log(typeProduct)
    
    return (
        <>
            {PRODUCTS.map(({id, name, price, img, category}) => (
                
                typeProduct === category ?
                <Link 
                    to={`/${typeProduct}/${id}`}  
                    className="cards-item" 
                    data-test-id={`products-card-${typeProduct}`}
                    key={`${category}${id}`}
                >
                        
                        <div className="wrapper-card-product">
                            <div className="card-product-img"><img src={img} alt="img" /></div>
                            <span className="card-product-name">{name}</span>
                            <div className="wrapper-card-product-price-starts">
                                <span className="card-product-price">{price}</span>
                                <img src={stars} alt="stars" />
                            </div>
                        </div>
                </Link>
                : null
            ))}
        </>
    )
}

export {Product}