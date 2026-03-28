import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Card = ({player , setCoin,coin,selectedPlayers,setSelectedPlayers}) => {
    const [isSelect,setIsSelect]=useState(false);
    const handleChoosePlayer=()=>{
    let newCoin=coin - player.playerPrice;

    if(newCoin>=0){
        setCoin(coin - player.playerPrice)
    }else{
        toast.warn('Not enough coin');
        return
    }
   
    toast.success(`${player.playerName} is Selected`)
    setIsSelect(true);
    setSelectedPlayers([...selectedPlayers, player])
}
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                    <figure className='w-81 h-60 mx-auto'>
                        <img src={player.playerImg} className='w-full h-full' alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <FaUser /> {player.playerName}</h2>
                        <div className='flex justify-between items-center gap-2'>
                            <div className='flex gap-2 items-center'>
                                <FaFlag />
                                <p>{player.playerCountry}</p>
                            </div>
                            <button className='btn '>{player.playerType}</button>
                        </div>
                        <div className='divider'></div>
                        <h3 className='font-bold'>Rating ({player.rating})</h3>
                        <div className='flex justify-between gap-5 font-bold'>
                            <p>{player.batStyle}</p>
                            <p className='text-right'>{player.bowlingStyle !== 'None' ? player.bowlingStyle : 'Not a Bowler'}</p>
                        </div>
            
                        <div className="card-actions justify-between items-center">
                            <p className='font-semibold'>Price: ${player.playerPrice}</p>
                            <button className="btn " onClick={handleChoosePlayer} disabled={isSelect}>{isSelect === true ? 'Selected':'Choose Player'}</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;