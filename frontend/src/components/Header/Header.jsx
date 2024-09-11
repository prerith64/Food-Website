import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='Header container rounded-3 position-relative' >   
      <div className="Header-contents position-absolute bottom-0 p-5  ">
     <h2>Lorem ipsum dolor sit .</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore exercitationem error numquam possimus nam vel mollitia, tempora nihil beatae temporibus aperiam debitis dignissimos soluta dolore, voluptates velit. Praesentium, atque?</p>
     <button className='btn btn-primary rounded-pill border-0 px-3 ' >View Menu</button>
      </div>
    </div>
  )
}

export default Header
