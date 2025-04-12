import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Category } from './components/Category'
import { Cart } from './components/Cart'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'

const App = () => {

  const [data, setData] = useState();
  const api = "https://free-food-menus-api-two.vercel.app/bbqs";

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(api);
      const ans = await response.json();
      setData(ans)
    }
    fetchApi();
  }, [])
  console.log(data);
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/category' element={<Category/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App