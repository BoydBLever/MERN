import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';
import { Link } from 'react-router-dom';
import './game.css';


const Game1 = (props) => {
    const [players, setPlayers] = useState(null);
    // const [game, setGame] = useState("undecided");
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:1337/api/players")
            .then(res => {
                console.log(res.data);
                setPlayers(res.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const clickHandler = (game, id) => {
        //update the player.game to playing, not playing or undecided
        let onePlayer = players.filter((p) => p._id === id)
        onePlayer.game1 = game;
        console.log(onePlayer.game1);
        axios.put(`http://localhost:1337/api/players/${id}`, {...onePlayer,game1:game})
        .then( res => {
            console.log(res);
            setRefresh(!refresh);
        })
        .catch(err => console.log(err))
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
                            <button name='playing' className={onePlayer.game1 === "playing" ? 'green' : ''} onClick={() => {clickHandler('playing', onePlayer._id)}}>Playing</button>
                            <button name='not playing' className={onePlayer.game1 === "not playing" ? 'red' : ''} onClick={() => {clickHandler('not playing', onePlayer._id)}}>Not Playing</button>
                            <button name='undecided' className={onePlayer.game1 === "undecided" ? 'yellow' : ''} onClick={() => {clickHandler('undecided', onePlayer._id)}}>Playing</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Game1