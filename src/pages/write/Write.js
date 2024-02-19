import React from 'react'
import './Write.css'
import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'
import Endbar from '../../components/endbar/Endbar'

const Write = () => {
  return (
    <>
    <TopBar/>
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        
        </div>
        <hr />
        <div className="writeFormGroup">
          <textarea
          placeholder='Write'
            className="writeInput writeText"
            type="text"
            autoFocus={true}
          />
        </div>
        <Link to="/">
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        </Link>
        
      </form>
    </div>
    <Endbar/>
    </>
  ) 
}

export default Write
