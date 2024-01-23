
import React, { useState } from 'react';
import '../Login.css';


const LoginForm = () => {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    
   
    return(
     <div className="login-container" >
        <card>    
        <form>
        <h2 className="name">Login</h2>
        <label htmlFor='username'>Username </label>
        <input type="text" placeholder='type your username' value={UserName} onChange={e=>setUserName(e.target.value)}/>
        <label htmlFor='password' >Password</label>
        <input type={showPassword ? 'text' : 'password'} placeholder='type your password' onChange={e=>setPassword(e.target.value)}/>
      
      <label>
        Show Password
        <input type="checkbox" onChange={togglePassword} />
      </label>
        <br></br>
        <button className='color'onClick={()=>{alert(`Username is ${UserName}, and password is ${Password}`);}}>Login</button>

        <p>Or Sign Up using</p>
        
        
        </form>
        <div className="social">
            
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
       
        </card> 
     </div>
     

    );
};
export default LoginForm;
