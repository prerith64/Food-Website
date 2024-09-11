import React, { useEffect,useState,useContext } from 'react'
import "./MyOrders.css"
import { StoreContext } from '../../components/Context/StoreContext'
import axios from 'axios'
import {img} from '../../assets/assets'

const MyOrders = () => {

    const [data,setData]=useState([])
    const {url,token}=useContext(StoreContext)

   const fetchOrders=async()=>{
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
    setData(response.data.data)
    console.log(response.data.data);
    

   }
   useEffect(()=>{
    if(token){
      fetchOrders();
    }
   },[token])

  return (
    <div className='my-orders'>
        <h2>My orders</h2>
        <div className="container">
          {data.map((order,index)=>{
            return (
              <div key={index} className="my-orders-order">
                <img src={img.deliveryBox} alt=""   style={{ width: '50px', height: '50px' }}  />
                <p>{order.items.map((item,index)=>{
                if(index === order.items.length-1){
                  return item.name+" x "+item.quantity
                }else{
                  return item.name+" x "+item.quantity+", "
                }
                  
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b> </p>
                <button onClick={()=>fetchOrders()} >Track Order</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default MyOrders
