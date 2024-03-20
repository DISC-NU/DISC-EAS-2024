import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <Link to='/' className='backbtn'>{"<"} Back</Link>
      <Link to='/'>
        <button className='finishbtn'>FINISH</button>
      </Link>
    </div>
  )
}

export default Footer
