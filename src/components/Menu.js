// import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../pastry.jpg'
import myImage1 from '../cowcake.jpg'
import myImage2 from '../cupcakes.jpg'
import '../Menu.css'
import AddToCartButton from './AddToCartButton';
import CartCounter from './CartCounter';


export default function Menu() { 
  
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  
  return (
    <div className='menu-container'>
        <h1>Menu</h1>
        <div className='add'><CartCounter cartCount={cartCount} /></div> 
      
        <button className="back"><Link to="/Home" className="back">BACK TO HOME</Link></button><br/>
        <ul className="vertical-menu">
            <li><a href="https://www.google.com/">Refrigerated Pastry</a></li>
            <br></br>
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>
             <img src={myImage1} alt="sweet pastry price 10$"></img>
              <p><b>sweet pastry price 10$</b></p>
              <br></br>
              <AddToCartButton onAddToCart={handleAddToCart} />
             <div><img src={myImage} alt="Description" style={{ width: '200px', height: '150px', objectFit: 'cover', marginRight: '10px' }}></img></div><br></br>
             <b> cow cake price 10$</b>
             <AddToCartButton onAddToCart={handleAddToCart} />
            <div><img src={myImage2} alt="Description"></img></div>
           <b>Cup Cakes 20$</b>
           <AddToCartButton onAddToCart={handleAddToCart} />
            </div>
           <br></br>
    
           <br></br>
            <li><a href="https://www.google.com/">Non-Refrigerated Pastry</a></li><br></br>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={myImage1} alt="sweet pastry price 10$"></img><br></br>
            <b>sweet pastry price 10$</b> 
            <br></br>
           <div><img src={myImage} alt="Description" style={{ width: '200px', height: '150px', objectFit: 'cover', marginRight: '10px' }}></img></div><br></br>
            <b> cow cake price 10$</b>
           <div><img src={myImage2} alt="Description"></img></div>
          <b>Cup Cakes 20$</b>
    </div>
    <br></br>
            <li><a href="https://www.google.com/">Cakes</a></li><br></br>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={myImage1} alt="sweet pastry price 10$"></img><br></br>
     <b>sweet pastry price 10$</b> 
      <br></br>
      <div><img src={myImage} alt="Description" style={{ width: '200px', height: '150px', objectFit: 'cover', marginRight: '10px' }}></img></div><br></br>
     <b> cow cake price 10$</b>
      <div><img src={myImage2} alt="Description"></img></div>
    <b>Cup Cakes 20$</b>
    </div>
    <br></br>
            <li><a href="https://www.google.com/">Holiday  Specials</a></li>
        </ul>
        <br></br>
        
        <button className="back"><Link to="/icecreams" className="back">NEXT</Link></button>
        <br></br>
        <br></br>
        <footer className='footer'>
        <p>&copy; 2023 Friends Dairy Farm. All Rights Reserved.</p>
        <div className="social-icons">
            
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-facebook" ><u>Facebook</u></i> {/* Facebook icon */}
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google"><u>google</u></i> {/* Google icon */}
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"><u>Twitter</u></i> {/* Twitter icon */}
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"><u>Instagram</u></i> {/* Twitter icon */}
        </a>
      </div>
      
      </footer>
    </div>
  );
};


