import React from 'react'
import NavSideBar from './NavSideBar.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='menu'>
      <NavSideBar/>
      <Outlet/>
    </div>
  );
}