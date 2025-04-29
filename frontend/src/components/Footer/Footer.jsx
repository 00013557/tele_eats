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
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.instragram_icon} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="X" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.linkedin_icon} alt="LinkedIn" />
              </a>
          </div>
        </div>

        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/cart">Delivery</a></li>
                <li><a href="/">Privacy Policy</a></li>
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
      <p className="footer-copyright">Copyright 2025 © teleeats.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
