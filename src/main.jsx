import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Login from './component/login.jsx'
import './index.css'
import HeroSection from './component/Herosection.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  
    <>
    {/* <App/> */}
    {/* <Navbar/> */}
    <Login/>
    <HeroSection/>

    </>

  
)
