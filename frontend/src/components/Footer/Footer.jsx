import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer' >
      <div className="footer-content">
        <div className="footer-content-left">
             <img src="" alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo nostrum est nulla debitis sit magni veniam quibusdam deserunt modi atque sed, amet eveniet quod blanditiis cupiditate, odio natus quae!</p>
             <div className="footer-social-icons">

             </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>643615888811</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
            <p className="footer-copyright">Copyright 2024 All righs reserved</p>
    </div>
  )
}

export default Footer
