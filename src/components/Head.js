import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';

const Head = () => { 
  const [serchQuery,setsearchQuery]=useState("");
  const [suggesition,setsuggesition]=useState([]);
  const [showsuggesion,setshowsuggesion]=useState(false);

  useEffect(()=>{
     const timer=setTimeout(() => getSearchSugestions(),200)
    
     return ()=>{
      clearTimeout(timer)
     }

  },[serchQuery])

  const getSearchSugestions = async ()=>{
    console.log('api call'+serchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + serchQuery)
    const json=await data.json()
    // console.log(json[1])
    setsuggesition(json[1])
  }


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
            <div>
            <input  className='w-1/2 border border-gray-400 px-1 rounded-l-full'
            type='text'
            value={serchQuery}
            onChange={(e)=>setsearchQuery(e.target.value)}
            onFocus={()=>setshowsuggesion(true)}
            onBlur={()=>setshowsuggesion(false)}
            />
            <button className='border border-gray-400 px-4 py-0.3 rounded-r-full bg-gray-200'
            >🔍</button>
            </div>
            {showsuggesion && (<div className='fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border-gray-100'>
              <ul>
                {suggesition.map((s)=>(<li key={s} className='py-1 px-1 shadow-sm hover:bg-gray-300 rounded-lg'>🔍{s}</li>))}
              </ul>
            </div>)}
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