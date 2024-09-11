import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homes/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
const App = () => {

  
  const [showLogin,setShowLogin]=useState(false)
       

  return (
    <>
       {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Router>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Order' element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify/>} />
            <Route path='/myOrders'element={<MyOrders />} />

          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
