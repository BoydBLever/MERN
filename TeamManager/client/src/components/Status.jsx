import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';

const Status = (props) => {
    const [players, setPlayers] = useState([]);

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
            <h1>List</h1>
            {
                players.map((onePlayer, index) => {
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

export default Status