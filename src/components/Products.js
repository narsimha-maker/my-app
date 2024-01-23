import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import CartCounter from './CartCounter';
import { Link } from 'react-router-dom';
import '../Products.css';

const ProductPage = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="products-container">
      <button className="back"><Link to="/Home" className="back">BACK TO HOME</Link></button>
     <div className='add'><CartCounter cartCount={cartCount} /></div> 
      <h1>Product Page</h1>
      {/* Other product details */}

      <div className="products-container1">
       <h1><a href='https://www.google.com/'>Cream</a></h1>
        <p>Dairy is a vast category of products made of animal milk, 
         including cheese, cream, butter, curd, ice cream, yogurt, etc. 
          Products using plant-based milk ...</p>
          <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
      <br></br>
      <div className="products-container1">
      <h1><a href='https://www.google.com/'>Yogurt</a></h1>
      <p>Yogurt; Ice cream; Pudding. Foods With Milk in Them. 
         These foods often contain cow's milk protein. Check their labels before buying. 
        If you're eating out, ask ...</p>
          <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
      <br></br>
      <div className="products-container2">
      <h1><a href='https://www.google.com/'>Butter</a></h1>
        <p>Dairy products include common grocery store food items in the Western world such as yogurt, 
          cheese, milk and butter. A facility that produces dairy products is ...</p>
          <AddToCartButton onAddToCart={handleAddToCart}/>
     </div>
     <br></br><br></br>
     <button className="back"><Link to="/menu" className="back">NEXT</Link></button>
     <footer className='footer'>
         <p>&copy; 2023 Friends Dairy Farm. All Rights Reserved.</p>
          <div className="social-icons">
            
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-facebook" ><u>Facebook</u></i> {/* Facebook icon */}          </a>          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
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

export default ProductPage;






// import  React from 'react';
// import { Link } from 'react-router-dom';
// import './AddToCartButton'
// import '../App.css';
// import '../Products.css';


// import AddToCartButton from './AddToCartButton';

// const ProductPage = () => {
//   return (
//     <div className="products-container">
//       <h1>Milk Products</h1>
//       <button className="back"><Link to="/Home" className="back">BACK TO HOME</Link></button>
//       <div className="products-container1">
//       <h1><a href='https://www.google.com/'>Cream</a></h1>
//        <p>Dairy is a vast category of products made of animal milk, 
//         including cheese, cream, butter, curd, ice cream, yogurt, etc. 
//          Products using plant-based milk ...</p>
//          <AddToCartButton />
//      </div>
//      <br></br>
//      <div className="products-container2">
//     <h1><a href='https://www.google.com/'>Yogurt</a></h1>
//       <p>Yogurt; Ice cream; Pudding. Foods With Milk in Them. 
//          These foods often contain cow's milk protein. Check their labels before buying. 
//         If you're eating out, ask ...</p>
//         <AddToCartButton />
//     </div>
//     <br></br>
//     <div className="products-container2">
//      <h1><a href='https://www.google.com/'>Butter</a></h1>
//        <p>Dairy products include common grocery store food items in the Western world such as yogurt, 
//          cheese, milk and butter. A facility that produces dairy products is ...</p>
//          <AddToCartButton />
//      </div>
//      <br></br>
//      <div className="products-container2">
//      <h1><a href='https://www.google.com/'>Milk Powder</a></h1>
//        <p>Skim milk is milk with zero fat,
//           while whole milk products contain fat. ...
//           Powdered milk (or milk powder), produced by removing the water from (usually skim) ...</p>
//          <AddToCartButton></AddToCartButton>
//     </div>
//     <br></br>
//     <br></br>
//      <div className="products-container2">
//        <h1><a href='https://www.google.com/'>Evaporated milk</a></h1>
//       <p>Evaporated milk. Also known as dehydrated milk, 
//          evaporated milk is a shelf-stable canned milk product with 
//          about 60% of the water removed from fresh milk. It ...</p>
//          <AddToCartButton></AddToCartButton>
//      </div>
//      <button className="back"><Link to="/menu" className="back">NEXT</Link></button>
//      <br></br>
//      <br></br>
//      <br></br>
//      <br></br>
//      <footer className='footer'>
//         <p>&copy; 2023 Friends Dairy Farm. All Rights Reserved.</p>
//          <div className="social-icons">
            
//          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
//            <i className="fab fa-facebook" ><u>Facebook</u></i> {/* Facebook icon */}
//          </a>
//          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-google"><u>google</u></i> {/* Google icon */}
//          </a>
//          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"><u>Twitter</u></i> {/* Twitter icon */}
//          </a>
//          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"><u>Instagram</u></i> {/* Twitter icon */}
//          </a>
//       </div>
      
//        </footer>
//     </div>
//   );
// };

// export default ProductPage;

