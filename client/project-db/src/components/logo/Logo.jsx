import React from 'react'
import './logo.css'
import logoimg from '../../assets/COOU-LOGO.PNG'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-img" src={logoimg} alt="COOU Logo" width="50" height="50" />
      <h1 className="logo-text">COOU Project Database</h1>  
    </div>
  )
}

export default Logo
