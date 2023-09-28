
import React from "react";
import '../App.css'
import { useState, useContext } from "react";
import { ShopContext } from '../context/shop-context';

export default function PurchaseItemBox({ itemY }) {
    const [bagItem, setBagItem] = useState(itemY);
    // const { incrementItems, decrementItems } = useContext(ShopContext);
    const { removeFromCart, updateCart } = useContext(ShopContext);

    const decrementItems = () => {
        setBagItem({
            ...bagItem, qty: bagItem.qty - 1,
            total: (bagItem.price * (bagItem.qty - 1))
        })
        updateCart(bagItem)
        
        //if qty === 0 then remove item from bag and update state ... TO DO 
        if (bagItem.qty === 0) {
            removeFromCart(bagItem);
        }
    }

    const incrementItems = () => {
        setBagItem({
            ...bagItem, qty: bagItem.qty + 1,
            total: (bagItem.price * (bagItem.qty + 1))
        })
        updateCart(bagItem)
    } 

    // setBagItem(itemInBag)
    console.log(" after setBagItem, bagItem  id: ", bagItem.id)

    return (
        <div className='row_flex'>
            <div className="image_div">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={bagItem.image} alt={""} width={100} height={100}></img><br />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="title_div">
                <h4>{bagItem.title}</h4><br />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="price_div">
                <h4> ${bagItem.price}</h4><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="qty_div">
                <span onClick={() => {
                    console.log("you click span minus")
                    decrementItems();
                    console.log("after decrementItems, bagItem", bagItem)                   
                }}>-</span>
                &nbsp;
                <h4> {bagItem.qty}</h4><br />
                &nbsp;
                <span onClick={() => {
                    console.log("you click span plus")
                    incrementItems();
                    console.log("after incrementItems, bagItem", bagItem)
                }}>+</span><br />                
            </div>
            <div className="subtotal_div">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4> ${bagItem.total}</h4><br />
            </div>

        </div >

    );
}
  