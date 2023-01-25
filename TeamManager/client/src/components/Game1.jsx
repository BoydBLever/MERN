import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';


const Game1 = (props) => {
    const [players, setPlayers] = useState(null);
    const [game, setGame] = useState("undecided");

    useEffect(() => {
        axios.get("http://localhost:1337/api/players")
            .then(res => {
                console.log(res.data);
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const clickHandler = (e, gameID) => {
        e.preventDefault();
        //update the player.game to playing, not playing or undecided
        const gameUpdate = {
            game: 'name'
        }
        setGame('name');
    }
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
                            <button name='playing' className={onePlayer.game === playing ? 'green' : ''} onClick={clickHandler('playing')}>Playing</button>
                            <button name='not playing' className={onePlayer.game === notplaying ? 'red' : ''} onClick={clickHandler('not playing')}>Not Playing</button>
                            <button name='undecided' className={onePlayer.game === undecided ? 'yellow' : ''} onClick={clickHandler('undecided')}>Playing</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Game1