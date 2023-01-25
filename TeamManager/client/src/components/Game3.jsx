import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';
import { Link } from 'react-router-dom';


const Game1 = (props) => {
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:1337/api/players")
            .then(res => {
                console.log(res.data);
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Player Status</h1>
            <Link to="/status/game/1">Game 1 |</Link> &nbsp;
            <Link to="/status/game/2">Game 2 |</Link> &nbsp;
            <Link to="/status/game/3">Game 3</Link> 
            {
            //if players is not null, then you map through the players array.
            players && players.map((onePlayer, index) => {
                    return (
                        <div key={onePlayer._id} className={playerStyle.player2}>
                            <h1>{onePlayer.name}</h1>
                            <button>Playing</button>
                            <button>Not Playing</button>
                            <button>Undecided</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Game1