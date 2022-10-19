/* eslint-disable */
import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Recharge from "./Recharge";
import Mypage from "./Mypage";
import Main from "./Main";
import "./Navbar.css"


function Navbar(props) {
    
  
    return (
      <div className="Navbar">
        <h2> 만화카페 통합시스템</h2>

        <nav className="navbar">
            <div className="navbar-menu">
                <ul>
                    <li className="navbarlist1"><Link to={"/main"}>Home</Link></li>
                    <li className="navbarlist2"><Link to={"/recharge"}>요금충전</Link></li>
                    <li className="navbarlist3"><Link to={"/mypage"}>마이페이지</Link></li>
                </ul>
            </div>
        </nav>
  
      
      </div>
      
      
      
    );
  }
  
  export default Navbar;