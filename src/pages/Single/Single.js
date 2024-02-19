import React from 'react'
import './Single.css'
import Singlepost from '../../components/Singlepost/Singlepost';
import Sidebar from '../../components/sidebar/Sidebar';
import Endbar from '../../components/endbar/Endbar';

const Single = () => {
  return (
    <>
    <div className="single">
    <Singlepost/>
  </div>
  <Endbar/></>
  )
}

export default Single
