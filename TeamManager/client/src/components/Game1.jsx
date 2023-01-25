
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import playerStyle from './main.module.css';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';


// const Game1 = (props) => {
//     const [players, setPlayers] = useState(null);
//     const [status, setStatus] = useState(status[0]);

//     useEffect(() => {
//         axios.get("http://localhost:1337/api/players")
//             .then(res => {
//                 console.log(res.data);
//                 setPlayers(res.data)
//             })
//             .catch(err => console.log(err))
//     }, [])

//     // const handleClick = () => {
//     //     axios.put(`http://localhost:1337/api/players/${id}`)
//     //     .then(res => {
//     //         console.log("Hello");
//     //         console.log(res.data.status)
//     //         // setStatus(res.data);
//     //     })
//     //     .catch(err=>console.log(err))
//     // }
//     const Button = styled.button`
//     background-color: black;
//     color: white;
//     font-size: 20px;
//     padding: 10px 60px;
//     border-radius: 5px;
//     margin: 10px 0px;
//     cursor: pointer;
//     `;

//     const ButtonToggle = styled(Button)`
//         opacity: 0.6;
//         ${({ active }) =>
//             active &&
//             `
//         opacity:1;
//         `}
//     `;
//     const ButtonGroup = styled.div`
//         display: flex;
//     `;

//     const types = ['Playing', 'Not Playing', 'Undecided'];
//     // ToggleGroup = () => {
//     //     const [status, setStatus] = useState(status[0]);
//     // }
//     return (
//         <div>
//             <h1>Player Status</h1>
//             <Link to="/status/game/1">Game 1 |</Link> &nbsp;
//             <Link to="/status/game/2">Game 2 |</Link> &nbsp;
//             <Link to="/status/game/3">Game 3</Link>
//             {
//                 players && players.map((onePlayer, index) => {
//                     return (
//                         <div key={onePlayer._id} className={playerStyle.player2}>
//                             <h1>{onePlayer.name}</h1>
//                             <ButtonGroup>
//                                 {types.map(type => (
//                                     <ButtonToggle
//                                         key={type}
//                                         active={active === type}
//                                         onClick={() => setStatus(type)}
//                                     >
//                                         {type}
//                                     </ButtonToggle>
//                                 ))}
//                             </ButtonGroup>

//                             <button>Playing</button>
//                             <button>Not Playing</button>
//                             <button>Undecided</button>
//                             {/* <button className={onePlayer.id.status === 1 ? 'green' : ''} onClick={handleClick(1)} value={status}>Playing</button> */}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Game1