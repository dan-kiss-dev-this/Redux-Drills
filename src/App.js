import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import PracticeComponent from './components/PracticeComponent';
import PracticeComponentTwo from './components/PracticeComponentTwo'

function App() {
  let name = 'Josh'
  return (
    <div className="App">
      <div>Home, Projects, About</div>
      <header>
        <p>Hey there {name}</p>
        <Navbar name="James" />
        <PracticeComponent />
        <PracticeComponentTwo />
      </header>
    </div>
  )
}

export default App;
