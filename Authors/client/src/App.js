import './App.css';
import {Link, Routes, Route, Navigate} from 'react-router-dom'
import Main from './components/Main';
import Create from './components/Create';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors 📚 </h1>
      <Link to="/authors">Home</Link> &nbsp;
      <Link to="/new">Add an author</Link> &nbsp;
      <hr/>
      <Routes>
      {/* MAIN ROUTE - SHOWS ALL AUTHORS */}
      <Route path="/authors" element={<Main/>} />

      {/* ADD A NEW AUTHOR */}
      <Route path="/new" element={<Create/>}/>

      {/* EDIT AUTHOR */}
      <Route path="/edit/:id" element={<Edit/>}/>

      {/* REDIRECT */}
      <Route path="*" element={<Navigate to="/notes" replace />}/>


      </Routes>
    </div>
  );
}

export default App;
