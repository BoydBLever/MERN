import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';

const Status = (props) => {
    const [players, setPlayers] = useState([]);
    const [toggle, setToggle] = useState(false);
    
    const toggleButton = () => {
        setToggle(!toggle)
    }
    
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
            <h1> ← Game 1 of 3 →</h1>

            {
                players.map((onePlayer, index) => {
                    return (
                        <div key={onePlayer._id} className={playerStyle.player2}>
                            <h1>{onePlayer.name}</h1>
                            <button style={{backgroundColor: toggle ? 'white' : 'green'}} onClick={()=> toggleButton(onePlayer._id)}>Playing</button>
                            <button style={{backgroundColor: toggle ? 'white' : 'red'}} onClick={()=> toggleButton(onePlayer._id)}>Not Playing</button>
                            <button style={{backgroundColor: toggle ? 'yellow' : 'gray'}} onClick={()=> toggleButton(onePlayer._id)}>Undecided</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Status