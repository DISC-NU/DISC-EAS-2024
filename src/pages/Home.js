import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <h1>HOME</h1>
      <div className='topbuttons'>
        <Link to="/additem">
          <button className='additembutton'>ADD ITEM</button>
        </Link>
        <Link to="/checkout">
          <button className='checkoutbutton'>CHECK OUT</button>
        </Link>
      </div>
      <div className='bottombutton'>
        <Link to="/viewinventory">
          <button className='viewinventorybutton'>VIEW INVENTORY</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
