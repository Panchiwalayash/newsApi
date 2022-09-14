import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'

const Signup = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({ username: "", email: "", password: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { username, email, password } = credential;
      const response=await fetch(`http://localhost:5000/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
      });
      let json= await response.json()
      if (json.success) {
        navigate('/login');
       }
       else{
         alert("Invalid credentials")
       }
    } catch (error) {
      console.log("Invalid credentials")
    }
  }
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });

  }
  return (
    <div className="login-page">
      <div className="sign-con">
        <div className="login-head">Signup</div>
        <div className="login-section">
          <div className="sign-entry">
            <label htmlFor="name">Username</label>
            <input type="text" className='username' name="username" onChange={onChange} />
          </div>
          <div className="sign-entry">
            <label htmlFor="email">Email</label>
            <input type="text" className='email' name="email" onChange={onChange} />
          </div>
          <div className="sign-entry">
            <label htmlFor="password">Password</label>
            <input type="password" className='password' name="password" onChange={onChange} />
          </div>
        </div>
        <div className="btn-con">
          <div type='submit' className="Sign-button" onClick={handleSubmit}>Sign Up</div>

          <Link style={{ textDecoration: "none" }} to="/login"><div className="login-button">Log In</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Signup