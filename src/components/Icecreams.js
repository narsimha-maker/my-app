import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import CartCounter from './CartCounter';
import '../App.css';
import '../Icecreams.css'

export default function Icecreams() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
   
    <div className="creams-container">
       <h1>Ice Creams Menu</h1>
       <div><CartCounter cartCount={cartCount} /></div> 
       <button className="back"><Link to="/Home" className="back">BACK TO HOME</Link></button><br/>
       <ul>
        <li>
          Vanilla Ice Cream
          <AddToCartButton onAddToCart={handleAddToCart} />
        </li><br></br>
        <li>Choclate Ice Cream <AddToCartButton onAddToCart={handleAddToCart} /></li><br></br>
        <li>Rock Star I ce Cream <AddToCartButton onAddToCart={handleAddToCart} /></li><br></br>
        <li>Black Forest Ice Cream <AddToCartButton onAddToCart={handleAddToCart} /></li>
       </ul>

       <button className="back"><Link to="/pay" className="back">NEXT</Link></button>
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
