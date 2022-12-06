import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import CountryList from './practice/CountryList'
import FetchData from './practice/FetchData'
import Hooks1 from './practice/Hooks1'
import Hooks2 from './practice/Hooks2'

const MyRoute = () => {
  return (
    <>
    <BrowserRouter>
   
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path='/hooks1' element={<Hooks1/>}/>
        <Route path='/hooks2' element={<Hooks2/>}/>
        <Route path='/posts' element={<FetchData/>}/>
        <Route path='/country' element={<CountryList/>}/>
        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default MyRoute