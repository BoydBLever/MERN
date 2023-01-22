import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>MERN Full-CRUD </h1>
      <Link to="/notes">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create">Create</Link>
      <hr />

      {/* SHOW TIME*/}
      <Routes>

        {/* MAIN - all NOTES */}
        <Route path='/notes' element={<Main />} />

        {/* CREATE */}
        <Route path='/create' element={<Create />} />

        {/* VIEW ONE: I WANT LINK TO MATCH THIS ROUTE */}
        <Route path='/note/:id' element={<ViewOne />} />

        {/* UPDATE */}
        <Route path='/update/:id' element={<Update/>} />

        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/notes" replace />} />

      </Routes>
    </div>
  );
}

export default App;
