import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Login from './component/login.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  
    <>
    {/* <App/> */}
    <Navbar/>
    {/* <Login/> */}
    <div className="bg-sky-300"><h1 className='underline'>hello</h1></div>
    </>

  
)
