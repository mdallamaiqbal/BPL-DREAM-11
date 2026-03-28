import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const SelectedCard = ({player,handleDeletedSelectedPlayer}) => {
    return (
        <div>
            <div  className='flex border-2 items-center gap-5 p-10 rounded-2xl justify-between'>
                 <div className='flex items-center gap-5'>
                    <img src={player.playerImg} alt={player.playerName} className='h-20 rounded-lg w-auto' />
                   <div>
                    <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser /> {player.playerName}</h2>
                    <p>{player.playerType}</p>
                   </div>
                 </div>
                 <button onClick={()=>handleDeletedSelectedPlayer(player)} className='btn text-red-500'><MdDelete /></button>
                </div>
        </div>
    );
};

export default SelectedCard;