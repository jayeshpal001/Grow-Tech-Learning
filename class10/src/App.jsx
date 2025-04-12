import React from 'react'
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage.jsx"
import Categorypage from "./pages/Categorypage.jsx"
import Cartpage from "./pages/Cartpage.jsx"
import Loginpage from "./pages/Loginpage.jsx"
import Signpage from "./pages/Homepage.jsx"
import { useState } from 'react'
const App = () => {
  const [cartData, setCartData] = useState([]);
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage cartData={cartData} setCartData={setCartData} />} />
        <Route path='/category' element={<Categorypage />} />
        <Route path='/cart' element={<Cartpage cartData={cartData} />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Signpage />} />
      </Routes>

    </div>
  )
}

export default App