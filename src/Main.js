/* eslint-disable */
import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import { useState } from 'react';
import "./Main.css"

function Main() {
    
      let posts = { fontSize: '30px'}
      let [글제목, 글제목변경] = useState(['가게1','가게2','가게3'])
      let [따봉, 따봉변경] = useState(0);

      function 함수(){
        console.log(1);
      }

      function 정렬하기(){
        const newArray2 = [...글제목];
        글제목변경( newArray2.sort() );
      }
  
    return (
      <div className="Main">
        
             <div> <Navbar/></div>
        <div>
        <button onClick={정렬하기}> 내 위치</button>
        </div>

            <button onClick={()=>{
            let copy = [...글제목];
            copy[0] = '수정된 제목';
            글제목변경(copy);
          }}>요금 충전</button>
          
          <div className='list'>
            <h4>{글제목[0]}<span onClick={()=>{따봉변경 (따봉+1) }}>👍</span> {따봉} </h4>
            <p>가게이름 인원현황 시간당금액 거리</p>
          </div>
          <div className='list'>
            <h4>{글제목[1]}</h4>
            <p>가게이름 인원현황 시간당금액 거리</p>
          </div>
          <div className='list'>
            <h4>{글제목[2]}</h4>
            <p>가게이름 인원현황 시간당금액 거리</p>
          </div>
      </div>
      
      
    );
  }
  
  
  export default Main;