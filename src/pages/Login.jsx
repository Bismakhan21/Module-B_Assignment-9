import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Signup from './Signup'
import { useState } from 'react';

function Login() {
    
    const [data, setData] = useState({});
 
  const data_update_handle = (key, value) => {
   
    setData((pre_obj) => {
      return { ...pre_obj, [key]: value };
    });
    console.log();
    
  };

  return (
    <div className="container">
        <h2>Login</h2>
    <label>Email address</label>
    <input 
    onChange={(e) => {
        data_update_handle("useremail", e.target.value);
      }}

    type="text" id="email" placeholder="Enter email" />
    <br />
    <br />
    <label>Your password</label>
    <input 
    onChange={(e) => {
        data_update_handle("useremail", e.target.value);
      }}

    type="password" id="password" placeholder="Enter password" />
    <br />
     <div className="btn">

    <Link to={'/'}>Create account..</Link>
    <button><Link to={'/dashboard'}>Login</Link></button>

    </div> 

    </div>
  );
};

export default Login