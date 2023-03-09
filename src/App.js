import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
 return (
   <div className="App">
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
     <header className="App-header">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page created by Shaghayegh
     </footer>
   </div>
 );
}

export default App;