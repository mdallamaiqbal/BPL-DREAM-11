import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const [toggol,setToggol]=useState('available')
    const players=use(playersPromise);
    return (
        <div className='container mx-auto my-16'>
          <div className='flex justify-between items-center gap-4 mb-5'>
            <h2 className='font-bold text-3xl'>Available Players</h2>
            <div>
               <button onClick={()=>setToggol('available')} className={`btn ${toggol === 'available' ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
               <button onClick={()=>setToggol('selected')} className={`btn ${toggol === 'selected' ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected(0)</button>
            </div>
          </div>
            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;