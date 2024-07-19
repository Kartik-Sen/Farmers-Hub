import React from 'react'
import './app.css'
import SideBar from './components/SideBar/SideBar'
import Body from './components/BodySection/Body'
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
   <>
   <Router>
   <div className='container'>
   <SideBar />
   <Body/>
   </div>
   </Router>
   </>
  )
}

export default App