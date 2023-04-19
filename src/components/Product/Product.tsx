import React from 'react';
import {IUserInterface} from "../../Interfaces/ProductInterfaces";
import ProductCard from "./ProductCard";
import "./../../App.css";

interface IProduct {
    product: IUserInterface
}

const Product = ({product}: IProduct) => {
    return (
        <div className="container">
            <h1>{product.username}</h1>
            <h6>{product.email}</h6>
            <h3>{product.address.setstreet}</h3>
            <p>{product.address.city}</p>
            <ProductCard/>
        </div>
    );
};

export default Product;