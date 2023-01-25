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

    const clickHandler = (e, ID) => {
        //route
        //ID
    }

    return (
        <div>
            <h1>Player Status</h1>
            <Link to="/status/game/1">Game 1 |</Link> &nbsp;
            <Link to="/status/game/2">Game 2 |</Link> &nbsp;
            <Link to="/status/game/3">Game 3</Link> 
            {
            players && players.map((onePlayer, index) => {
                    return (
                        <div key={onePlayer._id} className={playerStyle.player2}>
                            <h1>{onePlayer.name}</h1>
                            <button name='playing' onClick={clickHandler}>Playing</button>
                            <button name='not playing'>Not Playing</button>
                            <button name='undecided'>Undecided</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Game1