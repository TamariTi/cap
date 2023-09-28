
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Product from './components/Product';
import Cart from './components/Cart';
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import PreCheckOut from './components/PreCheckOut'
import Thankyou from './components/Thankyou'

import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Product/:productId" element={<Product />} />
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="/PreCheckout" element={<PreCheckOut />} />
            <Route path="/Checkout" element={<CheckOut />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>

    </div>
  )
}

export default App
