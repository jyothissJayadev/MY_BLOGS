import React from 'react'
import './Endbar.css'

const Endbar = () => {
  return (
    <>
  
        <footer className="footer section" id="contact">
            <div className="footer__container bd-container bd-grid">
                <div className="footer__content">
                    <h3 className="footer__title">
                        <a href="#" className="footer__logo">My Blogs</a>
                    </h3>
                    <p className="footer__description">if you feel i match your requirement kindly contact me</p>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Contact</h3>
                    <ul>      <li><a  className="footer__link">+91-9778253982</a></li>
                        <li><a  className="footer__link">jyothiss1kvj@gmail.com </a></li>
                  
            
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Reach Me On</h3>
                    <ul>
                        <a href="https://wa.me/9778253982" className="footer__social"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="mailto:jyothiss1kvj@gmail.com" className="footer__social"><i className="fa-sharp fa-regular fa-envelope"></i></a>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Social</h3>
                    <a href="https://www.linkedin.com/in/jyothiss-jayadevan-2ab238254/" className="footer__social"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/jyothissJayadev" className="footer__social"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/jyothiss___/" className="footer__social"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>

            <p className="footer__copy">Thanks for visting my Blogs</p>
        </footer>
    </>
  )
}

export default Endbar
