import React from "react";
import {Routes, Route} from "react-router-dom";
import Form from "./components/Form";
import PeopleComponent from "./components/PeopleComponent";
import PlanetComponent from "./components/PlanetComponent";

function App() {
  return (
      <>
      <h1>Luke API-walker</h1>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<PeopleComponent/>}/>
        <Route path="/planets/:id" element={<PlanetComponent/>}/>
     </Routes>
     </>
  );
}

export default App;