import React, { useState, useEffect } from "react";
import "./App.css";
import { API_BASE_URL } from "./config.js";

function App() {
  const [petInfo, setPetInfo] = useState({ pets: [] });
  const [petParams, setPetParams] = useState({
    type: "Dog",
    breed: "Affenpinscher",
  });

  useEffect(() => {
    const fetchPets = async () => {
      const result = await fetch(
        `${API_BASE_URL}?type=${petParams.type}&breed=${petParams.breed}`,
        {
          method: "GET",
          headers: {
            Authorization: "", // Replace with bearer token
          },
        }
      )
        .then((response) => response.json())
        .then((response) => setPetInfo({ pets: response.animals }));
    };
    fetchPets();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Pet Vortex</h1>
      </header>
      <main>
        <ul>
          {petInfo
            ? petInfo.pets.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))
            : ""}
        </ul>
      </main>
    </div>
  );
}

export default App;
