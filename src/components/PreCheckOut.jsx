import { useNavigate } from "react-router-dom";
import '../App.css'


export default function PreCheckOut() {
    const token = null; //will be set by Login.jsx
    const navigate = useNavigate();

    console.log("in PreCheckout")

    //if already sign in, go straight to checkout  TO DO.....

    return (
        <div className="pre_checkout_div">
            <div className="header_div">
                <h1 >Macy's</h1><br></br>

            </div>
            <div className="botttom_div">                
            <div className="signin_div">
                <h1>Sign In</h1>
                {
                    token ? (< Checkout />) :
                        (
                            <button className='product-button' onClick={() => {
                                navigate(`/Login?src=checkout`)

                            }} >
                                Sign In</button>
                        )
                }
            </div>
            <div className="guest_div">
                <h1>Guest check out</h1>
                <button className='product-button' onClick={() => {
                    navigate(`/Checkout`)

                }} >
                    Check Out as Guest</button>
                </div>
            </div>
        </div>

    )
}