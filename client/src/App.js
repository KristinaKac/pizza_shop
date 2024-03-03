import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/menu/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Basket from './pages/basket/Basket';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CardProduct from './pages/CardProduct';
import Header from './components/header/Header';
import Admin from './pages/Admin';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='App'>
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
    </React.Fragment>
  );
}

export default App;
