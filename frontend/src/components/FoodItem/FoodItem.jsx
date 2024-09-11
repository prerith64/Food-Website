import React, { useContext } from 'react'
import "./FoodItem.css"
import { img } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
const FoodItem = ({id,name,desc,image,price}) => {
    const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)

  return (
    <div className='food-item card ' >
      <div className="food-item-image-container position-relative">
        <img  className=' card-img-top  food-item-image' src={url+"/images/"+image} alt="" />
      {
        !cartItems[id]
        ?<img  onClick={()=>addToCart(id)} src={img.addIcon }  alt="loading" className="add position-absolute " />
        : <div className="food-item-counter">
            <img style={{width:"30px"}}  onClick={()=>addToCart(id)} src={img.greenAddIcon} alt=""  />
            <h4>{cartItems[id]}</h4>
            <img  style={{width:"30px"}} onClick={()=>removeFromCart(id)} src={img.redRemoveIcon} alt=""  />
        </div>
      }
      </div>
      <div className="food-item-info card-body ">
        <div className="food-item-name-rating d-flex ">
            <p className='card-title'>{name}</p>
            <img src="" alt="" />
        </div>
        <div>
        <p className="food-item-desc  card-text">{desc}</p>
        <p className="food-item-price card-text">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
