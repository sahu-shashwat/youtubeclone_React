import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => { 
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex col-span-1'>  
        <img 
         onClick={()=>toggleMenuHandler()}
         className='h-8 cursor-pointer'
        alt='menu-bar' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'>
        </img>
        <a href='/'>
        <img className='h-7 mx-8' 
        alt='Youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'>
        </img>
        </a>
        </div>
        <div className='col-span-10 px-15'>     
            <input  className='w-1/2 border border-gray-400 p-1 rounded-l-full'
            type='text'/>
            <button className='border border-gray-400 px-5 py-1 rounded-r-full bg-gray-200'
            >🔍</button>
        </div>
        <div>
            <img className='h-8'
             alt='user' src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'>
            </img>
        </div>
    </div>
  )
}

export default Head