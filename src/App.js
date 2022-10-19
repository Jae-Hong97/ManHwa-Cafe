/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Main from './Main';
import Signup from './Singup';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Recharge from './Recharge';
import Mypage from "./Mypage";

function App() {
  return (
    <div className="App">       
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/main/*" element={<Main />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/recharge/*" element={<Recharge />} />
              <Route path="/mypage/*" element={<Mypage />} />
          
          </Routes>

        </BrowserRouter>
        
        
        
        
    </div>
    
  );
}

export default App;
