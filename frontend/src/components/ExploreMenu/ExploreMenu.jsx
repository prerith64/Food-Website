import React from 'react'
import './ExploreMenu.css'
import menuList from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu d-flex flex-column container ' id='explore-menu'  >
        <h1>Our Menu</h1>
    <div className="explore-menu-list d-flex justify-content-between ">
        {menuList.map((item,index)=>(
            <div onClick={()=>setCategory(prev=>prev===item.itemName?"All":item.itemName)} key={index} className="explore-menu-list-item ">
                <img className={category===item.itemName?"active rounded-circle":"rounded-circle"} src={item.itemImage} alt=""    />
                <p>{item.itemName}</p>
            </div>
        ))}
    </div>
    <hr className='mx-3 border-0' style={{height:"2px"}} />
    </div>
  )
}

export default ExploreMenu
