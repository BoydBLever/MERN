import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      return response.json()
    })
    .then(apiData => {
      console.log(apiData)
      setPokemon(apiData.results);
    })
    .catch(err => {
      console.log(err);
    })
  }

  //Axios fetch
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      // AXIOS WRAPS THE RESPONSE INSIDE A 'DATA' KEY
      console.log(response);
      setPokemon(response.data.results);
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="App">
      <h1> 👾 Pokemon API 👾 </h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button> 
      <button onClick={axiosPokemon}>Axios Pokemon</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            //how can I map over pokemon? The results are an object.
            pokemon.map((result, i) => {
              return (
                <tr>
                  <td>{result.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
