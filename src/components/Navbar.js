import React from 'react';
import { Link } from 'react-router-dom';
import './header-section.css';

const Navbar = () => (
  <nav>
    <div id="menu">
      <header>BookStore CMS</header>
      <ul>
        <li><Link style={{ textDecoration: 'none' }} to="/">Books</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/categories">Categories</Link></li>
      </ul>
    </div>
    <div className="user-icon">User</div>
  </nav>
);
export default Navbar;
