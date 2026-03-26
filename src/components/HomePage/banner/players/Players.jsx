import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const players=use(playersPromise);
    console.log(players);
    
    return (
        <div className='container mx-auto'>
            <p>Players : {players.length}</p>
            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;