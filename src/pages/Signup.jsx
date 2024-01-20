import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';

function Signup() {

    const [data, setData] = useState({});
 
  const data_update_handle = (key, value) => {
   
    setData((pre_obj) => {
      return { ...pre_obj, [key]: value };
    });
    console.log();
    
  };

  return (
    <>
    <div className='container2'>
   
    <h2 className='heading'>Sign Up</h2>
    <label>Email address</label>
    <input  onChange={(e) => {
                data_update_handle("useremail", e.target.value);
              }}

     type="text" 
     id="email" 
     placeholder="Enter email" />

    <br />
    <br />
     <label>Your password</label>
    <input onChange={(e) => {
                data_update_handle("password", e.target.value);
              }}

    type="password" id="password" placeholder="Enter password" />

    <br />
    <br />

    <button><Link to={'/dashboard'}>Sign up</Link> </button>
      <br />
    <Link to={'/login'}>Already have an account Sign in..</Link>

  </div>
      
    </>
  )
}

export default Signup
