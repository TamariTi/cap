
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import '../App.css'
import { ShopContext } from '../context/shop-context';


export default function Cart() {
    const navigate = useNavigate();
    const { cartItems, isTokenExist, setCartItems, getCartTotal } = useContext(ShopContext);
    const orderTotal = getCartTotal();

    function renderItem(item) {
        const decrementItems = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                newState[index] = {
                    ...newState[index],
                    qty: item.qty - 1,
                }
                //if qty becomes, remove from array
                newState[index].qty === 0 && newState.splice(index, 1);
                setCartItems(newState);
            }
        }

        const incrementItems = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                newState[index] = {
                    ...newState[index],
                    qty: item.qty + 1,
                }
                setCartItems(newState);
            }
        }

        const handleRemove = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                //remove from array
                newState.splice(index, 1);
                setCartItems(newState);
            }  
        }

        function itemSubTotal(item) {
            let subtotal = item.price * item.qty;
            return subtotal.toFixed(2);
        }

        return (
            <div className='row_flex'>
                <div className="image_div">
                    <img src={item.image} alt={""} width={100} height={100}></img><br />
                </div>
                <div className="title_div">
                    <h4>{item.title}</h4><br />
                </div>
                <div className="price_div">
                    <h4> ${item.price}</h4><br />
                </div>
                <div className="qty_div">
                    <span onClick={() => {
                        console.log("you click span minus")
                        decrementItems();
                    }}>-</span>
                    &nbsp;
                    <h4> {item.qty}</h4><br />
                    &nbsp;
                    <span onClick={() => {
                        console.log("you click span plus")
                        incrementItems();
                    }}>+</span><br />
                </div>
                <div className="subtotal_div">
                    <h4> ${itemSubTotal(item)}</h4><br />
                </div>
                <div className='remove_item_div'>
                    <button onClick={()=>{handleRemove()}}>remove</button>
                </div>
            </div >
        )
    }

    console.log("in cart, cartItems = ", cartItems)
    return (
        <div className='Cart'>
            <h3>Cart </h3>
            <div className='column_flex'>
                {cartItems.map((itemY) => {
                    return renderItem(itemY);
                })}
            </div>
            <h4>TOTAL: ${orderTotal.toFixed(2)}</h4>
            <div style={{border: 'none'}} className='row_flex'>
                <button className='product-button' onClick={() => {
                    navigate(`/Checkout`) 
                }} >
                    Check Out</button>
                <button className='product-button' onClick={() => {
                    navigate(`/`)
                }} >
                    Continue Shopping</button>
            </div>

        </div>
    )

}