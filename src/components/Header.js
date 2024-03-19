import React from 'react';
import logo from './assets/img/eas-logo-white.png';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className='leftside'>
                <Link to="/">Evanston Animal Shelter</Link>
                <Link to="/" style={{fontWeight: 401, fontSize: 24}}>Inventory Manager</Link>
            </div>
            <div className='rightside'>
                <a href="http://evanstonanimalshelter.net/">
                    <img src={logo}></img>
                </a>
            </div>
        </div>
    );
};
export default Header;