import React from 'react';
import './navbar.css';

function Navbar() {
  
  return (
    <header>
        <div className="logo">
        <a href="#" id="logo">My LOGO</a>
        </div>

        <label htmlFor="toggle-1" className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
        <input type="checkbox" id="toggle-1"></input>

        <nav className="nav">
            <ul>
            <li><a href="#">ITEM 1</a></li>
            <li><a href="#">ITEM 2</a></li>
            <li><a href="#">ITEM 3</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;