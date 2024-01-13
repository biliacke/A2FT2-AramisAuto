import React from 'react';
import navSideBar from "../layouts/navSideBar.jsx";
import styles from '../styles/drilldown.css';
import PiechartDrillDown from '../components/pieDrillDown.jsx'

const pageDrilldown = (props) => {
  return (
    <>
      <navSideBar/>
      <h1>Drill Down</h1>
      <PiechartDrillDown/>
    </>
  )
}

export default pageDrilldown;