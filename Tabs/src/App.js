import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

function App() {
  return (
    <fieldset>
      <legend>🗂️</legend>
      <Tabs>
        <div label="tab1">
          <p>Tab 1 content is showing here!</p>
        </div>
        <div label="tab2">
          <p>Tab 2 content is showing here!</p>
        </div>
        <div label="tab3">
          <p>Tab 3 content is showing here!</p>
        </div>
      </Tabs>
    </fieldset>
  );
}

export default App;
