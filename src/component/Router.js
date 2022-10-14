import React from 'react'
import { Route , Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NavbarComp from './NavbarComp'
function Router() {
  return (
    <div>
        
      <Routes>
        
        <Route path='/' element={<Home />} />
        {/* <Route path='/navbar' element={<NavbarComp />} /> */}
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Router
