import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

const list = localStorage.getItem('boxes');
  const [boxes, setBoxes] = useState(list ? JSON.parse(list) : 
    [{
      todo: "Get MERN black belt",
      status: false
    },
    {
      todo: "go for a run",
      status: true
    },

  ])

  const addBox = (boxColor) => {
    setBoxes([...boxes, boxColor]);
    let temp = [...boxes, boxColor];
    localStorage.setItem('boxes', JSON.stringify(temp));
  }

  const updateBox = (e, i) => {
    const copy = [...boxes];
    copy[i].status = !copy[i].status;
    setBoxes(copy);
    localStorage.setItem('boxes', JSON.stringify(copy));
  }

  const deleteBox = (e, i) => {
    console.log("delete", i);
    const filteredBoxes = boxes.filter((b, boxIndex) => {
      if (i === boxIndex) {
        return false
      } else {
        return true
      }
    })
    setBoxes(filteredBoxes);
    localStorage.setItem('boxes', JSON.stringify(filteredBoxes));
  }
  return (
    <div className="App">
      <h1> TODO-LIST📝  </h1>
      <hr />
      <Form addBox={addBox} />
      <Display
        boxes={boxes}
        updateBox={updateBox}
        deleteBox={deleteBox} />
    </div>
  );
}
export default App;