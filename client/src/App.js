import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/menu/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Basket from './pages/basket/Basket';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Header from './components/header/Header';
import Admin from './pages/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthThunk } from './redux/slices/user';
import CardProduct from './pages/cardProduct/CardProduct';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='App_wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<CardProduct />} />
          <Route path='/product' element={<Menu />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
