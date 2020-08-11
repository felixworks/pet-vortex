import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List/List.js"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Pet Vortex</h1>
      </header>
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
