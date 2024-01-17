import React from 'react';
import routes from '../routes.jsx'
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function NavSideBar() {
  return (
    <nav className="NavSideBar">
      <ul>
        <li><Link to="/drilldown">Drill Down</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
      </ul>
    </nav>
  );
}