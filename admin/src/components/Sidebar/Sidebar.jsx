import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="sidebar-options">
        <NavLink  to='/add' className="sidebar-option">
        <img width="30px" height="30px" src="https://img.icons8.com/pastel-glyph/64/purchase-order.png" alt="purchase-order"/>
            <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
        <img width="30px" height="30px" src="https://img.icons8.com/pastel-glyph/64/purchase-order.png" alt="purchase-order"/>
            <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
        <img width="30px" height="30px" src="https://img.icons8.com/pastel-glyph/64/purchase-order.png" alt="purchase-order"/>
            <p>orders </p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
