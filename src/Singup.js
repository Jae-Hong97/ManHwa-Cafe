import React from "react";
import TextField  from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Signup() {
    return (
      <div className="Signup">
        
      
        <div>
        <h1> 회원가입</h1>
      </div>
      <div>
        <div><TextField 
        label = "ID"
         required 
          name='ID'
          autoComplete="id"
          autoFocus />
        </div>

        <div>
        <TextField 
        label = "Password"  
        type="password" 
        required 
        name='password'/>
        </div>

        <div>
        <TextField 
        label = "Name"  
        type="name" 
        required 
        name='name'/>
        </div>

        <div>
        <TextField 
        label = "Phone Number"  
        type="phone number" 
        required 
        name='phone number'/>
        </div>
        
        <div>
          <Link to = "/"> 
        <Button type="submit"   
        variant="contained" sx={{ mt: 3, mb: 1 }}> 등록 </Button>
        </Link>
        </div>
        
        
      </div>
                 
  
      
      </div>
      
      
    );
  }
  
  export default Signup;