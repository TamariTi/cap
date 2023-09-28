import { useEffect, useState } from "react";
import React from "react";
import Nav from './Nav'
import ProductBox from './ProductBox'
import NavLogout from "./NavLogout";
import { useContext } from "react"
import { ShopContext } from '../context/shop-context';
import '../App.css'





const BASE_URL = "https://fakestoreapi.com";
export default function Home() {
    const [allCategories, setAllCategories] = useState([])
    const [allproducts, setAllproducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    const { isTokenExist } = useContext(ShopContext);


    function filterCategory(e, category) {
        console.log("in filterCategory, selected category = ", category)

        setDisplayProducts(allproducts.filter(function (product) {
            return product.category === category
        }));

    }

    useEffect(() => {

        const fetchproducts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products`)

                const result = await response.json();
                console.log(result);
                console.log("products = ", result);
                setAllproducts(result)
                setDisplayProducts(result)
            } catch (err) {
                console.error(err);
            }
        }

        const fetchCategories = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products/categories`)

                const result = await response.json();
                console.log(result);
                console.log("categories = ", result);
                setAllCategories(result)
            } catch (err) {
                console.error(err);
            }
        }

        fetchproducts()
        fetchCategories()

    }, [])

  
    console.log("test sorting, ", displayProducts)

    return (
        <div>
            {isTokenExist() ? <NavLogout /> : <Nav />}
            <div className="line"></div>

            <div className="list-all-categories">
                {allCategories.map((cat) => {
                    return <b className="fil"> < p onClick={(e) => { filterCategory(e, cat) }}> {cat}</p></b>
                })}
            </div>
            <div className='list-all-products'>
                {displayProducts.map((product) => {
                    return <ProductBox key={product._id} product={product} />;

                })}
            </div>
        </div>
    )
}