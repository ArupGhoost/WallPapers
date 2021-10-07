import React from 'react';
import { Link } from 'react-router-dom';
import {SmalldropDown2} from './SmalldropDown';

const MainDropDown = ({ hoverdown, hoverChange }) => {
    
    
     
    return (
        <>
        
        {hoverdown ? <div className='flex flex-col z-10 justify-center items-center w-auto h-auto bg-gray-700 py-32 z-10 overflow-y-none' onClick={hoverChange} >
                <Link to='/' className='py-4 text-2xl text-blue-300'>Ghost Wallpapers</Link>
                   <SmalldropDown2 />
                <Link to='/about' className='py-4 text-2xl text-blue-300'>About</Link>
                <Link to='/signin' className='py-4 text-2xl text-blue-300'>SignIn</Link>
            </div> : ''}
         
        </>
    )
}
export default MainDropDown;

