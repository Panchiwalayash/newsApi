import React, { useState } from 'react'
import './login.css'
import {Link, useNavigate}  from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
    const [credential,setCredential]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
       console.log(credential.email);
        try {
          const response = await fetch(`http://localhost:5000/api/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              }, 
              body: JSON.stringify({email: credential.email, password: credential.password})
            });
            let json= await response.json()
            if(json.success==true){
              //    console.log("you are redirecting to main source");
              localStorage.setItem('user',json.user.username)
              navigate('/');
              window.location.reload()
             }
              else{
                  alert("Invalid credentials");
              }
        } catch (error) {        
          alert("Invalid credentials");
        }
          }
          const onChange=(e)=>{
            setCredential({...credential,[e.target.name]:e.target.value});
          }
        

  return (

    <div className="login-page">
      <div className="login-con">
        <div className="login-head">Login</div>
        <div className="login-section">
          <div className="login-entry">
            <label htmlFor="email">Email</label>
            <input type="email" className='email' name='email' required onChange={onChange} />
          </div>
          <div className="login-entry">
            <label htmlFor="password">Password</label>
            <input type="password" className='password' name="password" required onChange={onChange} />
          </div>
        </div>
        <div className="btn-con">
      <div className="login-button" onClick={handleSubmit}>Log In</div>
      <Link style={{textDecoration:"none"}} to='/signup'><div className="Sign-button">Sign Up</div></Link>
      </div>
      </div>
    </div>
  )
}

export default Login