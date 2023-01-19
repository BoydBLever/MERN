import './App.css';
import ClassComponent from './components/ClassComponent';

function App() {
  
  return (
    <div className="App">
      <h1>🎉 Putting It Together 🧁 🍦</h1>
      <ClassComponent firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <ClassComponent firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
