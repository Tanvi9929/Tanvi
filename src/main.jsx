import React from 'react'
import ReactDom from 'react-dom/client'
import App from './component/App.jsx'
import Navbar from './component/Navbar.jsx'
import Login from './component/login.jsx'
import './index.css'
import HeroSection from './component/Herosection.jsx'
import FeaturesSection from './component/FeaturesSection.jsx'
import ui from "./Image.js"
import Testinomial from './component/Testinomial.jsx'
ReactDom.createRoot(document.getElementById('root')).render(
  
    <>
    {/* <App/> */}
    <Navbar/>
    <Login/>
    {/* <HeroSection/> */}
    <FeaturesSection/>
    
  
  {/* <div class="bg-sky-300">hloo welcome to new framework</div>
   */}

   {/* <img src ={ui.ai}></img>    */}
   {/* <img src = {require("./assets/react.svg")}/> */}
   {/* <Testinomial/> */}

    </>

  
)
