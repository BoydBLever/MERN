import './App.css';
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>⚾️ Team Manager 🏟️ 🧢</h1>
      <Link to="/players">List</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/new">Add Player</Link>
      <hr/>
    </div>
  );
}

export default App;
