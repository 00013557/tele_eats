import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order on Telegram with TeleEats</h2>
        <p>Choose from fast-food to uzbek cuisines, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati laboriosam dolor, temporibus qui repellendus distinctio at recusandae non nisi earum corrupti dolores velit totam error aut placeat odio reiciendis provident.</p>
        <button onClick={() => {
          const foodSection = document.getElementById('food-display');
          foodSection.scrollIntoView({ behavior: 'smooth' });
        }}>
        View Menu
        </button>
      </div>
    </div>
  )
}

export default Header
