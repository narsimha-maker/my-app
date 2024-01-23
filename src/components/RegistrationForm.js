import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import '../App.css';
import '../Registration.css';



const RegistrationForm = () => {
  const navigate = useNavigate();
  // State variables to store user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');



  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here (e.g., API call, validation)

    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setConfirmPassword('');
    setPassword('');

    navigate('/success');
  };

  return (
    <div className='registration-container'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        
        <label>
          Confirm Password:
          <input
            type="confirm password"
            value={confirmPassword}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="color" type="submit">Sign UP</button><br/>
        <span>If you have account, Please login here</span>
        <br/>
        {/* <button className="color" type="submit">Login</button> */}
        <Link to="/login"><button className="color" type="submit">Login</button></Link>
      </form>
    </div>
  );
};

export default RegistrationForm;

