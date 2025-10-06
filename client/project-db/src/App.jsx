import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Auth from './pages/Authentication/Auth';
import NavBar from './components/nav-bar/Nav-bar';
import UploadPage from './pages/upload-page/UploadPage';
import IntergrityPage from './pages/intergrity-policy/IntergrityPage';
import PlagPage from './pages/plag-page/PlagPage';

function App() {

  return (
   
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/plagiarism-check" element={<PlagPage/>} />
        <Route path="/integrity-policy" element={<IntergrityPage/>} />
        <Route path="/upload" element={<UploadPage/>} />
      </Routes>
      
    </Router>
  )
}

export default App
