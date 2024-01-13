import React from 'react';
import { Link } from 'react-router-dom';

export default function navSideBar() {
  return (
    <nav className="navSideBar">
      <span>Arasync</span>
      <span>
        <Link to="/drilldown">Drill Down</Link>
        <Link to="/wishlist">Wishlist</Link>
      </span>
    </nav>
  );
}