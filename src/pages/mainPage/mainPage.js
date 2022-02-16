import React from "react";
import { FirstPart } from '../../components/firstPart/firstPart';
import { SecondPart } from '../../components/secondPart/secondPart';
import { Product } from '../../components/product/product';
import { Sale } from '../../components/sale/sale';
import { SpecialOffer } from '../../components/specialOffer/specialOffer';
import { Blog } from '../../components/blog/blog';

const MainPage = () => {
    return (
        <>
            <FirstPart />
            <SecondPart />
            <Product />
            <Sale />
            <SpecialOffer />
            <Blog />
        </>
    )
}
export {MainPage}