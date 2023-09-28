import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState , useContext} from "react";

const BASE_URL = "https://fakestoreapi.com";
import '../App.css'
import Cart from './Cart'
import { ShopContext } from '../context/shop-context';

export default function Product() {
    const [product, setProduct] = useState({})
    const { productId } = useParams();
    const [error, setError] = useState(null)
    const [errormsg, setErrormsg] = useState(null)
    const navigate = useNavigate();
    const { addToCart, purchaseItem, setPurchaseItem, cartItems } = useContext(ShopContext);

    console.log("useParams producId: ", productId);

    useEffect(() => {

        const fetchproduct = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products/${productId}`)

                const result = await response.json();
                console.log(result);
                console.log("products = ", result);
                setProduct(result)
            } catch (error) {
                console.error(error);
                setError(error.message)
                setErrormsg("Sorry. we have problems fetching the product ${productId}.")
            }
        }
        fetchproduct()

    }, [])

    return (
        <div className='productPage'>
            <div className='productImage'>
                <br />
                <br />
                <img src={product.image} alt={product.title} width={300} height={300}></img>
            </div>
            <div className='productSide'>
                <br />
                <br />
                <h6>{product.title}</h6>
                <br />
                <h6>Product Description:
                    <br />
                    {product.description}</h6>
                <br />
                <h6>price: ${product.price}</h6>
                <br />
                <button className='product-button' onClick={
                    () => {
                        console.log("add to cart clicked");
                         const getItem =   {
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                image: product.image,
                                qty: 1
                            }                                               
                        console.log("before calling addToCart, getItem : ", getItem);
                        addToCart(getItem);
                    }}>
                    Add to Cart</button>

                <button className='product-button' onClick={() => { navigate(`/Cart`) }}> View Cart</button>
                <button className='product-button' onClick={() => { navigate(`/`) }} >Home</button>

            </div>
        </div>
    )
}