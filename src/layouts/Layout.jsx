import React from 'react'
import navSideBar from './navSideBar.jsx';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <navSideBar />
      <Outlet />
    </>
  );
}