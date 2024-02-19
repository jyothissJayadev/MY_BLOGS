import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
import TopBar from '../TopBar/TopBar'
import Endbar from '../endbar/Endbar'
import img1 from '../../img/b1.jpg'
import img2 from '../../img/b2.jpg'
import img3 from '../../img/b3.jpg'
import img4 from '../../img/b4.jpg'
import img5 from '../../img/b5.jpg'


const Posts = () => {
  return (
   <>
   <TopBar/>
   <h1 className='topText'>BloGs</h1>
    <div className="container">
       
      <Post img={img1} />
      <Post img={img2} />
      <Post img={img3}/>
      <Post img={img4}/>
      <Post img={img5}/>
    </div>
    <Endbar/>
    </>
  )
}

export default Posts
