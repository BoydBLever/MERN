import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <h1> Team Manager  </h1>
      <Link to="/players/list">Manage Players</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/status/game/1">Manage Player Status</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/players/list">List</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/players/addplayer">Add Player</Link>
      <hr />
      <Routes>
        {/* MAIN ROUTE SHOWS ALL PLAYERS */}
        <Route path="/players/list" element={<Main />} />

        {/* ADD A NEW PLAYER */}
        <Route path="/players/addplayer" element={<Create />} />

        {/* MANAGE PLAYER STATUS */}
        <Route path="/status/game/1" element={<Status/>}/>

        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/players/list" replace />} />

      </Routes>
    </div>
  );
}

export default App;
