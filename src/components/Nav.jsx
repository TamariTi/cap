
import '../App.css'
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div className='navbar'>

            <p>CapStone</p>

            <div className='nav-radio'>
         <Link to="/Cart" className='navbarlinks'>
                <p >Cart </p>
            </Link>
            </div>

           

        </div>

    )
}