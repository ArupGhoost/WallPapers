import React from 'react';
import { Link } from 'react-router-dom';

const SmalldropDown = () => {
    return (
        <>
            <div className='absolute top-20  bg-gray-800 border border-blue-300 solid rounded w-32 h-36 p-3 ml-6 flex flex-col justify-center items-center'>
                 <Link to='/cars'  className='py-2  hover:text-gray-300 text-xl'>Cars</Link>
                 <Link to='/nature'  className='py-2 hover:text-gray-300 text-xl'>Nature</Link>
                 <Link to='/bikes' className='py-2 hover:text-gray-300 text-xl'>Bikes</Link>
            </div>
        </>
    )
}



const SmalldropDown2 = () => {
    return (
        <>
              <div className= 'flex flex-col justify-center items-center'>
                 <Link to='/cars'  className='py-2 text-blue-300 hover:text-gray-300 text-xl'>Cars</Link>
                 <Link to='/nature'  className='py-2 text-blue-300 hover:text-gray-300 text-xl'>Nature</Link>
                 <Link to='/bikes' className='py-2  text-blue-300 hover:text-gray-300 text-xl'>Bikes</Link>
            </div>
        </>
    )
}




export default SmalldropDown;
export { SmalldropDown2 };
