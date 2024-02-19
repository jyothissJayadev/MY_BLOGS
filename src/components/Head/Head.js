import React from 'react'
import homeimg from '../../img/home.png'
import './Head.css'
const Head = () => {
  return (
    <div className="header">
    <section className="share section bd-container" id="share">
                <div className="share__container bd-grid">
                    <div className="share__data">
                        <h2 className="section-title-center">Igniting Curiosity, One Blog Post at a Time</h2>
                        <p className="share__description">Welcome to our blog! We are passionate about sharing captivating content that sparks curiosity and fosters a thirst for knowledge. Explore our concise yet compelling articles and join us on a journey of discovery. Let your mind wander as we dive into diverse topics, inspiring you to see the world through an enlightened lens.</p>
                        <a href="#" className="button">Show More</a>
                    </div>

                    <div className="share__img">
                        <img src={homeimg} alt=""/>
                    </div>
                </div>
            </section>
  </div>
  )
}

export default Head
