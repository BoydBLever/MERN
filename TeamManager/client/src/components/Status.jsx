import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';
import {Link, useParams} from 'react-router-dom';

const Status = (props) => {
    const [players, setPlayers] = useState(null);
    const [status, setStatus] = useState(status);

    useEffect(() => {
        axios.get("http://localhost:1337/api/players")
        .then(res => {
            console.log(res.data);
            setPlayers(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        axios.put(`http://localhost:1337/api/players/${onePlayer._id}`, {status})
        .then(res=> {
            console.log(res.data);
            setStatus(res.data);
        })
        .catch(err => {console.log(err)});
    }
    
    return (
        <div>
            <h1>Player Status Game 1</h1>
            <Link to="/status/game/1">Game 1</Link> 
            <Link to="/status/game/2">Game 2</Link> 
            <Link to="/status/game/3">Game 3</Link> 
            {
            //if players is not null, then you map through the players array.
            players && players.map((onePlayer, index) => {
                    return (
                        <div key={onePlayer._id} className={playerStyle.player2}>
                            <h1>{onePlayer.name}</h1>
                            <button className={onePlayer.status === 1 ? 'green' : ''} onClick={handleClick(1)} value={status}>Playing</button>
                            <button className={onePlayer.status === -1 ? 'red' : ''} onClick={handleClick(-1)} value={status}>Not Playing</button>
                            <button className={onePlayer.status === 0 ? 'yellow' : ''} onClick={handleClick(0)} value={status}>Undecided</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Status