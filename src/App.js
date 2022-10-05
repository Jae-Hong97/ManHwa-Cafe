/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Main from './Main';
import Signup from './Singup';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Recharge from './Recharge';


function App() {
  return (
    <div className="App">       
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        
        
      </Routes>

        </BrowserRouter>
        
        
        
        
    </div>
    
  );
}

export default App;
