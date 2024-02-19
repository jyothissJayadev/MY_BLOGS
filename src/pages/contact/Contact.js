import React from 'react'
import './Contact.css'
import Endbar from '../../components/endbar/Endbar'
import TopBar from '../../components/TopBar/TopBar'

const Contact = () => {
  return (
    <>
    <TopBar/>
    <div className="wrapper">
			<div className="inner">
				<form action="">
					<h3>Contact Us</h3>
					<p>We value your feedback and are committed to providing exceptional support. Contact us for prompt assistance.</p>
					<label className="form-group">
						<input type="text" className="form-control"  required/>
						<span>Your Name</span>
						<span className="border"></span>
					</label>
					<label className="form-group">
						<input type="text" className="form-control"  required/>
						<span >Your Mail</span>
						<span className="border"></span>
					</label>
					<label className="form-group" >
						<textarea name="" id="" className="form-control" required></textarea>
						<span >Your Message</span>
						<span className="border"></span>
					</label>
					<button>Submit 
						<i className="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
        <Endbar/>
        </>
  )
}

export default Contact
