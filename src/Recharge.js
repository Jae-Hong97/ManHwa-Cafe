import { TextField } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import { Label } from "@mui/icons-material";

function Recharge() {
    return (
      <div className="Recharge">
        

        <div> <Navbar/> </div>

        <div>
          <h2>충전금액</h2> <br/>
          <TextField label= "요금충전"></TextField>
          <button>충전</button>
        </div>
        <div>
          <h5> 현재금액 </h5>
        </div>
  
      
      </div>
      
      
    );
  }
  
  export default Recharge;