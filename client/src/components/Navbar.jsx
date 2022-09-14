import React from 'react'
import './navbar.css'

const Navbar = () => {

  const logoutHandler=()=>{
    localStorage.clear();
    window.location.reload()
  }

  return (
    <div>
      <div className="navbar">
        <div className="nav-title">NewsApi</div>
        <button className="logout-btn" onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar