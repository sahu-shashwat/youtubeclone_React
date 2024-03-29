import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
   const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  
if  (!isMenuOpen) return null;  
return (
    <div className='p-5 shadow-lg w-48'>
        <ul className='font-black'>
          <li><Link to='/'>Home</Link></li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5' >Watch Latter</h1>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
    </div>
  )
}

export default Sidebar