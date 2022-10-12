import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Recharge from "./Recharge";
import Mypage from "./Mypage";
import Main from "./Main";
import "./Navbar.css"

function Navbar(props) {
    
    return (
      <div className="Navbar">
        

        
        <nav className="navbar">
            <div className="navbar-menu">
                <ul>
                    <li><Link to={"/main"}>Home</Link></li>
                    <li><Link to={"/recharge"}>요금충전</Link></li>
                    <li><Link to={"/mypage"}>마이페이지</Link></li>
                </ul>
            </div>
        </nav>
          
                
            
  
      
      </div>
      
      
      
    );
  }
  
  export default Navbar;