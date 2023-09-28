import '../App.css'
import { useNavigate } from "react-router-dom";


export default function Thankyou() {
    const navigate = useNavigate();

    async function handleDone(e) {
        // e.preventDefault();
        console.log("hello handleDone")
        navigate(`/`)

    }

    return (
        <div className="thankyou_div">
            <h1>
                Thank you for placing the order
            </h1>
            <button  onClick={(e) => { handleDone(e) }}>Done</button>
        </div>
    )
}