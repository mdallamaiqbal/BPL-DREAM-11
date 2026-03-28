import React from 'react';

import SelectedCard from '../../../../UI/SelectedCard';

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,setCoin,coin}) => {
   const handleDeletedSelectedPlayer=(player)=>{
    const filterPlayer=selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerName != player.playerName )
   setSelectedPlayers(filterPlayer);
   setCoin(coin + player.playerPrice)
}
    
    return (
        <div>
          <div className='space-y-5'>
             { selectedPlayers.length === 0 ?
             <div className='h-96 flex items-center justify-center flex-col gap-4'>
                <h2 className='font-semibold text-xl text-gray-500'>No players selected yet</h2>
                <p className='text-gray-400'>Go to Available tab to select players</p>
             </div> 
             : selectedPlayers.map((player,index)=>{
                return (
               <SelectedCard player={player} handleDeletedSelectedPlayer={handleDeletedSelectedPlayer}  key={index}/>
                )
                
            })
           }
          </div>
        </div>
    );
};

export default SelectedPlayers;