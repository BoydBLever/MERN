import React, { useState, useEffect } from 'react';
import axios from 'axios'
import playerStyle from './main.module.css';

const Main = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/players")
      .then(res => {
        console.log(res.data);
        setPlayers(res.data)

      })
      .catch(err => console.log(err))
  }, [])

  const deletePlayer = (deleteID) => {
    console.log(deleteID);

    if (window.confirm("Are you sure you want to delete this player?")) {

      axios.delete(`http://localhost:1337/api/players/${deleteID}`)
        .then(res => {
          console.log(res.data);
          console.log("DB DELETE IS SUCCESSFUL!");

          // remove from the DOM after a successful delete
          setPlayers(players.filter((player) => player._id !== deleteID))
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div>
      <h1>List</h1>
      {
        players.map((onePlayer, index) => {
          return (
            <div key={onePlayer._id} className={playerStyle.player}>
              <h1>{onePlayer.name}</h1> <h1>{onePlayer.position}</h1>
              <button onClick={() => deletePlayer(onePlayer._id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Main