import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>PRODUCT MANAGER 🖥️ </h1>
      <div>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<DisplayOne />} path="/products/:id" />
        </Routes>
      </div>
      {/* <DisplayOne/> */}
    </div>
  );
}

export default App;
