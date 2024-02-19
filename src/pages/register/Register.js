import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input className="registerInput" type="text" placeholder="Username" />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder=" Email" />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Password" />
      <Link to="/" className='link'>
      <button className="registerButton">
        Register</button></Link>
    </form>
      <button className="registerLoginButton">
        <Link className='link' to="/login"> Login</Link></button>
  </div>
  )
}

export default Register
