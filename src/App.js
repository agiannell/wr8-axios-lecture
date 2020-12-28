import React from 'react';
import Collection from './Components/Collection'
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="main">
      <h1>My Pokemon Card Collection</h1>
      <Collection/>
    </div>
  );
}

export default App;
