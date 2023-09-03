import React from "react";
import image from '../assets/img/fahad.jpg'
import Heart from './Heart';

function Card() {
    return (
        <>
            <div className="py-8 mx-auto bg-white text-black rounded-xl">
                <h3 className="pb-3 px-5 font-bold">Image Title</h3>
               <img src={image} alt="Fahad" className="block w-64 h-80"  />
               <div className='flex flex-row mt-3'>
                  <Heart/>
               </div>
            </div>
        </>
    )
}

export default Card
