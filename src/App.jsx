import React from 'react'
import Navbar from './Comonents/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import About from './Pages/About';
import Service from './Pages/Service'; 
import Contact from './Pages/Contact'; 
import Home from './Pages/Home.jsx'


const App = () => {
  return (
    <>
    <Navbar/>
<div className="container">
<Routes>
  <Route path='/Home' element={<Home/>} />
  <Route path='/About' element={<About/>} />
  <Route path='/Service' element={<Service/>} />
  <Route path='/Contact' element={<Contact/>} />
 
  </Routes>
</div>

    </>
  )
}

export default App