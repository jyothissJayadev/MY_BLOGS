import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Email" />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Password" />
       <Link to="/"><button className="loginButton">Login</button></Link> 
      </form>

<button className="loginRegisterButton">
<Link to="/register" className='link'>Register</Link></button>

        
    </div>
  )
}

export default Login
