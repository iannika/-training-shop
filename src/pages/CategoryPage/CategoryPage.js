import React from 'react';
import { Product } from "../../component/product/product";
import adjustments from "../../assets/img/adjustments.png";
import viewGrid from "../../assets/img/view-grid.png";
import viewList from "../../assets/img/view-list.png";

import share from "../../assets/img/share.png";


import "./CategoryPage.css";

const CategoryPage = (page) => {

    const typePage = page.page;
    const typePageUpper = typePage.toUpperCase();
    const productType  = typePage.toLowerCase();
    console.log(typePage);
    console.log(typePageUpper);
    console.log(productType);
    
    return (
        <div className='products-page' data-test-id={`products-page-${productType}`}>

            <div className='wrapper-products-page-nav'>
                <div className='products-page-nav'>
                    <div className='products-page-nav_page'><span>Home</span> ► {typePage}</div>
                    <div className='products-page-nav_share'><img src={share} alt='img'/>Share</div>
                </div>
            </div>
        
            <div className='wrapper-products-page_title'>
                <div className='products-page_title'>{typePageUpper}</div>
            </div>
            
            <div className='products-page_filters'>
                <div className='products-page_filter'><img src={adjustments} alt='img'/>FILTER</div>
                <div className='products-page_view'>
                    <button><img src={viewList} alt='img'/></button>
                    <button><img src={viewGrid} alt='img'/></button>
                </div>
                <div className='products-page_select'>
                    <select>
                        <option value='bestsellers'>BESTSELLERS</option>
                        <option value='bestseller'>BESTSELLERS</option>
                        <option value='bestselle'>BESTSELLERS</option>
                    </select>
                </div>
            </div>
            <div className='products-page_card-product'>
                <Product productType={productType} />
            </div>

        </div>
    )
}

export {CategoryPage}