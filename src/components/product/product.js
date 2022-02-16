import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/PRODUCTS";
import stars from '../../assets/img/stars.png';

import "./product.css";

const Product = (categoryType) => {
    const typeCategory = Object.values(categoryType).join();
    console.log(typeCategory)
    
    return (
        <>
            {PRODUCTS.map(({id, name, price, img, category}) => (
                
                typeCategory === category ?
                <Link to={`/${typeCategory}/${id}`}  className="cards-item" data-test-id={`product-card-${typeCategory}`}key={`${category}${id}`} >
                        
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