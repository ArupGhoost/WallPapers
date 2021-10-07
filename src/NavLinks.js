import React from 'react';
import { useState } from 'react';
import SmalldropDown from './SmalldropDown';
import { Link } from 'react-router-dom';

const NavLinks = ({hoverChange}) => {

    const[smalldrop, setsmallDrop] = useState(false);
  
    const dropDown = () => {
        setsmallDrop(!smalldrop);
    }

    return (
        <>
          <div className='box-border'>
     <nav className='text-gray-300 italic text-center m-auto p-1'>
         "Work Hard and Let the Almighty do its wonder"
     </nav>
     <div className='pt-3'>
  
       <nav className='text-blue-300 flex justify-between items-center px-7 lg:px-16 md:px-9 sm:px-7'>
        <div >
        <Link to='/' href="#" className='text-xl'>Ghost Wallpapers</Link>
        </div>

        <div className='p-1 focus:outline-none focus:ring-2 hidden lg:ml-96 lg:block lg:flex' onClick={dropDown}>
          <span className='cursor-pointer'>Wallpapers</span>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
         
              </svg>
              {smalldrop ? <SmalldropDown /> : ''}
          </div>

          <div className='hidden lg:mr-96 lg:block'>
          <Link to='/about'>About</Link>
          </div>

        <div>
        <Link to='/signin' className='hidden lg:block'>Sign In</Link>
        </div>
       <div onClick={hoverChange}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer lg:hidden md:block sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
         </svg>
        </div> 
       </nav>
   
     </div>
     </div>  
        </>
    )
}

export default NavLinks;