import React from 'react';
import { natureWallpapers } from './WallPapers';

const Nature = () => {
    return (
        <>
           <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3 gap-4 pt-10 px-2 pb-5 '>
               { natureWallpapers.map((value) => {
                   return (
                       <img key={value.id} src={value.imageSrc} alt={value.imageAlt} className='w-auto h-80 rounded border-blue-100 border solid hover:bg-blue-200'/>
                   )
               }) }
           </div> 
           <div>
               <p className='text-xl text-blue-300 text-center'>Source Google</p>
           </div>
        </>
    )
}

export default Nature;
