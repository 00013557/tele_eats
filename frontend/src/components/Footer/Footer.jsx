import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ipsa quis pariatur odio minus atque. Quisquam eum magni laudantium fugiat ad blanditiis, obcaecati deserunt perferendis repellendus voluptates praesentium harum ea?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+998-97-777-77-77</li>
                <li>contact@telegrameats.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © telegrameats.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
