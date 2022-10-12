import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import { useState } from 'react';

function Mypage() {
  let [글제목, 글제목변경] = useState(['가게1','가게2','가게3'])  
  
  return (
      <div className="Recharge">
        
        
        <div> <Navbar/></div>

            <div>
                <h5>현재 금액 </h5>
                <h6> 원</h6>
                
            </div>
            <div>
              <h3> 사용 내역 </h3>
            </div>
            <div>
                <div className='list'>
                <h4>{글제목[0]}</h4>
                <p>가게이름 이용날짜 사용시간 사용금액</p>
              </div>
              <div className='list'>
                <h4>{글제목[1]}</h4>
                <p>가게이름 이용날짜 사용시간 사용금액</p>
              </div>
              <div className='list'>
                <h4>{글제목[2]}</h4>
                <p>가게이름 이용날짜 사용시간 사용금액</p>
              </div>
            </div>
      
      </div>
      
      
    );
  }
  
  export default Mypage;