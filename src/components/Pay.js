// import React from 'react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../Pay.css'




export default function Pay() {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber:'',
    expiryDate:'',
    cvvCode:''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form Data:', formData);
    // You can also send the data to a server or perform additional actions here
       window.location.reload();
    
  };

  return (
    <div className="pay-container">
        <button className="back"><Link to="/Home" className="back">BACK TO HOME</Link></button><br/>
        <form onSubmit={handleSubmit}>
      <h1>Payment Information</h1>
      <span><b>Amount:</b></span><br></br><br></br>
      <div>
        Cardholder Name:
        <br></br><br></br><input type="text" placeholder='type cardholder name here' name="cardholderName"
            value={formData.cardholderName} onChange={handleChange}></input><br></br>
        Card Number:
        <br></br><br></br><input type="text" placeholder='type card number here' name="cardNumber" value={formData.cardNumber} onChange={handleChange}></input><br></br>
        Card Expire
        Date(MM/YY):<br></br><br></br><input placeholder="MM/YY" name="expiryDate" value={formData.expiryDate} onChange={handleChange}></input> <br></br>
        CVV:<br></br><br></br><input placeholder='CVV' name="cvvCode" value={formData.cvvCode} onChange={handleChange}></input><br></br>
        <button type="submit">Place Your Order</button><br></br><br></br>
        
        <span><b>Use only below cards</b></span>
        <p>VISA   MasterCard   AMEX</p>
        
      </div>
      
      </form>
    </div>
  )
  
}
