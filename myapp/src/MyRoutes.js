import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart';
import About from './components/layouts/About';
import AxiosData from './components/pages/AxiosData';
import Contact from './components/pages/Contact';
import Counter from './components/pages/Counter';
import Data from './components/pages/Data';
import Display from './components/pages/Display';
import EmailConfirmation from './components/pages/EmailConfirmation';
import Faq from './components/pages/Faq';
import FetchData from './components/pages/FetchData';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Product from './components/pages/Product';
import Register from './components/pages/Register';
import Counter2 from './components/redux-example/Counter2';
import Game from './components/redux-example/Game';
import First from './First'

const MyRoutes = () => {
  return (
     <BrowserRouter>
     <Routes>
        <Route path="/First" element={<First/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/faq" element={<Faq/>}/>

        <Route path='/confirm/:token' element={<EmailConfirmation/>}/>

        <Route path='/counter' element={<Counter/>}/>
        <Route path='/data' element={<Data/>}/>

        <Route path='/display' element={<Display/>}/>

        <Route path='/fetchdata' element={<FetchData/>}/>
        <Route path='/axiosdata' element={<AxiosData/>}/>

        {/* redux*/}
        <Route path='/count' element={<Counter2/>}/>

        <Route path='/game' element={<Game/>}/>

       
     </Routes>
     </BrowserRouter>
  );
}

export default MyRoutes