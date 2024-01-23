
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Products from './components/Products';
import Menu from './components/Menu';
import Icecreams from './components/Icecreams';
import Pay from './components/Pay';




const App = () => {
  return ( 
    <Router> 
      <div>
        <nav className='hide-element'>
          <ul>
            <li>
              <Link to="/register">Register Form</Link>
            </li>
            <li>
              <Link to="/login">Login Form</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/products">Milk Products</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/icecreams">Icereams</Link>
            </li>
            <li>
              <Link to="/pay">Pay Here</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/> 
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/icecreams' element={<Icecreams/>}/>
        <Route path='/pay' element={<Pay/>}/>
       </Routes>
        
      </div>
    </Router>
  );
};

export default App;
