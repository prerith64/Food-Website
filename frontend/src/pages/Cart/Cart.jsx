import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../components/Context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart container' >
      <div className="cart-tems">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
             return (
               <div key={index} >

<div className="cart-items-title cart-items-item">
                <img src={`${url}/images/${item.image}`} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className="btn-close" ></p>
              </div>
              <hr />

               </div>

              
             )
          }
        })}
      </div>
      <div className="cart-bottom container">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          </div>
          <hr />
    
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${ getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2 }</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
         <hr />
          <button onClick={()=>navigate('/Order')} >PROCEED TO CHECKOUT</button>
      </div>
      
    </div>
  )
}

export default Cart
