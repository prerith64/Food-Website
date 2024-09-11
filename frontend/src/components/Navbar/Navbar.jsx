import React, { useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../Context/StoreContext'
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("home")
   
 const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
 const navigate=useNavigate();
 const logout=()=>{
     localStorage.removeItem("token");
     setToken("");
     navigate("/");
 }

  return (
  <nav className="navbar  ">
    <div className='container ' >
    <img src="" alt="" className='logo' />
    <ul className="nav d-flex">
      <li className='nav-item  ' > <a onClick={()=>setMenu("home")} href="/" className={menu==="home"?"text-decoration-underline nav-link text-white":"nav-link text-white"}  > home</a></li>
      <li className='nav-item  '><a onClick={()=>setMenu("menu")} href="#"  className={menu==="menu"?"text-decoration-underline nav-link text-white":"nav-link text-white"} > menu</a></li>
      <li className='nav-item '> <a onClick={()=>setMenu("mobile-app")} href="#"  className={menu==="mobile-app"?"text-decoration-underline nav-link text-white":"nav-link text-white"}> mobile-app</a></li>
      <li className='nav-item '> <a onClick={()=>setMenu("contact")} href="#"  className={menu==="contact"?"text-decoration-underline nav-link text-white":"nav-link text-white"}>contact us</a></li>
    </ul>
    <div className="nav d-flex align-items-center">
      <div className="navbar-search-icon ">
        <Link to='/Cart' ><i className="bi bi-cart-fill text-white mx-4  "  /></Link>
        <div  className={getTotalCartAmount()===0?"":"dot rounded-circle "}  ></div>
      </div>
      {!token?<button className='btn btn-outline-primary rounded-pill border-3 '  onClick={()=>setShowLogin(true)}  >Sign in</button>:
      <div className='navbar-profile' >
          <img width="38" height="38" src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png" alt="person-male--v3" className='person bg-light rounded-circle ' />
          <ul className="nav-profile-dropdown">
            <li  onClick={()=>navigate('/myOrders')}  ><img width="20" height="20" src="https://img.icons8.com/ios-filled/38/bag-front-view.png" alt="bag-front-view"/><p>Orders</p></li>
            <hr />
            <li onClick={logout} ><img width="20" height="20" src="https://img.icons8.com/metro/38/exit.png" alt="exit"/><p>Logout</p></li>
          </ul>
        </div>
      }
      
      
    </div>
    </div>
  </nav>
        
  )
}

export default Navbar
