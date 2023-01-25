import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';
import {useParams} from 'react-router-dom';

const Status = (props) => {
    const [players, setPlayers] = useState(null);
    const [status, setStatus] = useState(stat);

    useEffect(() => {
        setStatus(stat);
    }, [stat]);
    
    useEffect(() => {
        axios.get("http://localhost:1337/api/players")
        .then(res => {
            console.log(res.data);
            setPlayers(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleClick = (val) => {
        axios.put(`http://localhost:1337/api/players/${onePlayer._id}/status`)
        .then(res=> {
            setStatus(val);
        })
        .catch(console.log);
    }
    
    return (
        <div>
            {
            players && players.map((onePlayer, index) => {
                    return (
                        <div key={onePlayer._id} className={playerStyle.player2}>
                            <h1>{onePlayer.name}</h1>
                            <button className={onePlayer.status === 1 ? 'green' : ''} onClick={handleClick(1)}>Playing</button>
                            <button className={onePlayer.status === -1 ? 'red' : ''} onClick={handleClick(1)}>Not Playing</button>
                            <button className={onePlayer.status === 0 ? 'yellow' : ''} onClick={handleClick(0)}>Undecided</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Status