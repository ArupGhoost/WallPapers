import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
          <div className=' text-center mt-16'><h1 className='text-blue-300 font-bold text-7xl pt-8'>
              HD Wallpapers 
          </h1>
        </div>
        <div className='text-center pt-12'>
        <Link to='/nature' className='text-2xl py-2 px-2 text-blue-300 border border-blue-300 solid hover:text-blue-200'>Wallpapers</Link>
        </div>    
        </>
    )
}

export default Home;
