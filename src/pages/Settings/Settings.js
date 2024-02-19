import React from 'react'
import './Settings.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'
import Endbar from '../../components/endbar/Endbar'
const Settings  = (props) => {
  const navigate=useNavigate();
  const [text, setText] = useState(41);
  const deleting=()=>{
    setText(0)
   console.log("hfljkashd")
   console.log(text)
    props.deleting(text)
    navigate('/')
  }
   return (
    <>
    <TopBar/>
    <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Your Account</span>
        <button className="settingsTitleDelete" onClick={deleting}> 
        Delete Account
        </button>
       
      </div>
      <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            className="settingsPPInput"
          />
        </div>
        <label>Username</label>
        <input type="text" placeholder="Safak" name="name" />
        <label>Email</label>
        <input type="email" placeholder="safak@gmail.com" name="email" />
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" />
        <Link to="/" className='lnk'>
        <button className="settingsSubmitButton" type="submit">
          Update
        </button>
        </Link>
      
      </form>
    </div>
  </div>
  <Endbar/>
  </>
  )
}

export default Settings
