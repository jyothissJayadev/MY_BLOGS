import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div class="card">
				<div class="imgBx">
					<a href="#">
					<Link to="/post/abcd" className="link">
					<img src={props.img}/>   </Link>
					</a>
				<Link to="/post/abcd" className="link">
					<h2 className='cursur'>Baked Feta Pasta with Shrimp  </h2>
          </Link>
					<p><br/>Creamy, tangy, cheesy, and packed 
					with extra herbs and perfectly cooked shrimp, 
					this version of baked feta pasta is truly next 
					level and totally worth the hype. 
					</p>
					
				</div>
			</div>
  )
}

export default Post

