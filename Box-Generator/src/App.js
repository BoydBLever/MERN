import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';
import { json } from 'react-router-dom';

function App() {
  
  const [boxes, setBoxes] = useState(["red", "green", "blue"]);
  const [size, setSize] = useState([10,50,100]);
  
  const addBox = (boxColor, boxSize) => {
    setBoxes([...boxes, boxColor]);
    setSize([...size, boxSize]);
    json.parse(boxColor);
    json.parse(boxSize);
    localStorage.setBoxes('my-box', <json className="stringify"></json>(boxColor));
    localStorage.setSize('my-size', json.parse(boxSize));
  }

  return (
    <div className="App">
      <h1> Box Generator ✅ </h1>
      <hr />
      <Form addBox={addBox} />
      <Display boxes={boxes} size={size} />
    </div>
  );
}

export default App;
