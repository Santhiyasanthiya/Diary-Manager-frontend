import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom";

function Portal() {
  return (
    <div id="wrapper">
           <Navbar></Navbar>
           <Outlet />
                    
        </div>
  )
}

export default Portal