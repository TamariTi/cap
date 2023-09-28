
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Product from "./Product";


export default function ProductBox({ product }) {

    // console.log("product box id: ", product.id)
    // console.log("product literal template: ", `/Product/${product.id}`)

    return (
        <div className="productClass">
            <Link to={`/Product/${product.id}`}>
                <img src={product.image} alt={product.title} width={100}  ></img>
            </Link>
            {/* <br /><br /><br /><br /> */}
            <h6>{product.title}</h6>
            <h6>price: ${product.price}</h6>
            <h6>Rating: {product.rating.rate} ({product.rating.count})</h6>
            <h6>Category: {product.category}</h6>
            <br />
            
        </div>

    );
}
