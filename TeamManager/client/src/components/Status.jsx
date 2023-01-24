import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';

const Status = (props) => {
    const [players, setPlayers] = useState([]);
    const [active, setActive] = useState(false);
    
    const handleClick = () => {
        setActive(!active);
    }

    useEffect(() => {
        axios.get("http://localhost:1337/api/players")
            .then(res => {
                console.log(res.data);
                setPlayers(res.data)

            })
            .catch(err => console.log(err))
    }, [])

    // const buttonColor = () => {
    //     document.getElementById("button").style.backgroundColor = 'green';
    // }
    // const buttonColor2 = () => {
    //     document.getElementById("button2").style.backgroundColor = 'red';
    // }
    // const buttonColor3 = () => {
    //     document.getElementById("button").style.backgroundColor = 'yellow';
    // }

    return (
        <div>
            <h1>List</h1>
            {
                players.map((onePlayer, index) => {
                    return (
                        <div key={onePlayer._id} className={playerStyle.player2}>
                            <h1>{onePlayer.name}</h1>
                            <button
                            onClick={handleClick} 
                            className={active ? "black-btn" : "white-btn"}>Playing</button>
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