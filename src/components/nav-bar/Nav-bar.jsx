import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import './navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      <div className="nav-container">
        <Logo />
        {/* Logo image imported but not rendered */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span
            className="hamburger-icon"
            style={{
              color: isMenuOpen ? 'white' : 'yellow'
            }}
          >
            {isMenuOpen ? '✖' : '☰'}
          </span>
        </button>
        <div className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`}>
          <nav className="sidebar-links">
            <Link to="/" className="nav-link" onClick={closeMenu}>HOME</Link>
            <Link to="/projects" className="nav-link" onClick={closeMenu}>PROJECTS STATUS</Link>
            <Link to="/upload" className="nav-link" onClick={closeMenu}>UPLOAD PROJECT</Link>
            <Link to="/plagiarism-check" className="nav-link" onClick={closeMenu}>PLAGIARISM CHECK</Link>
            <Link to="/integrity-policy" className="nav-link" onClick={closeMenu}>INTEGRITY POLICY</Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT</Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>CONTACT</Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="nav-link" onClick={closeMenu}>DASHBOARD</Link>
                <button
                  className="nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => {
                    localStorage.removeItem('token');
                    closeMenu();
                    window.location.href = '/';
                  }}
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link" onClick={closeMenu}>LOGIN</Link>
                <Link to="/register" className="nav-link" onClick={closeMenu}>REGISTER</Link>
              </>
            )}
          </nav>
        </div>
        {isMenuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
      </div>
    </>
  );
}

export default NavBar;
