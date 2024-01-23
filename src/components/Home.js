import React  from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Home.css';
// import '../Navbar.css'

const Home = () => {

return(
<div className="home-container">
    <header>
        <h1>Welcome to NAINIKA's Dairy Form</h1>
    </header>
    <div>
    <span className="custom-link"><Link to="/Home"><b>Home</b></Link></span>
   <span className="custom-link"><Link to="/products"><b>Milk Products</b></Link></span>
   <span className="custom-link"><Link to="/menu"><b>Menu</b></Link></span>
   <span className="custom-link"><Link to="/icecreams"><b>Ice Creams</b></Link></span>
   <span className="custom-link"><Link to="/pay"><b>Pay Here</b></Link></span>
    </div>
  
   <button className="button-register"><Link to="/register" className="button-register">Register</Link></button>
   
   <button className="button-login"><Link to="/login" className="button-login">Login</Link></button>
   <br></br>
   <br></br>

   <p>
   <p>
      <b>NAINIKA's</b> Dairy Farm is nestled in the heart of picturesque landscapes,
      where our commitment to sustainable farming practices and the well-being of our
      cows ensures the production of premium-quality dairy products.
    </p>
    <p>
      Our journey began with a vision to provide families with wholesome and nutritious
      dairy options straight from the farm. From our lush green pastures to your table,
      we take pride in delivering the goodness of nature.
    </p>
    <p>
      At Green Pastures, we offer a diverse range of dairy products to meet your
      nutritional needs and delight your taste buds. From fresh and creamy milk
      to a variety of artisanal cheeses and velvety yogurts, each product is crafted
      with care and precision.
    </p>
    <p>
      Explore the purity of our milk, the richness of our cheeses, and the goodness
      of our yogurts. We believe in providing our customers with a farm-to-table
      experience that captures the essence of our sustainable and ethical farming practices.
    </p>
  
   </p>
    
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

export default Home;