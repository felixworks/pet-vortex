import React, { useState, useEffect } from "react";
import "./App.css";
import { API_BASE_URL } from "./config.js";

function App() {
  const [petInfo, setPetInfo] = useState({ pets: [] });
  const [petParams, setPetParams] = useState({
    type: "Dog",
    breed: "Affenpinscher"
  });

  useEffect(() => {
    const fetchPets = async () => {
      const result = await fetch(
        `${API_BASE_URL}?type=${petParams.type}&breed=${petParams.breed}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY2MDUwYzIwMDM2ZjcwZjgzNWU5NTI5ZDllZTUzYzE5ZjhhYjVjYTViNGEzMzdjMzE3MTJmNThkNjcyZGE0OTVjZmFhNTlmNTJkNzA0MjlhIn0.eyJhdWQiOiJBZTBTSktEdnpzeTE0RVA5MUZTdzFmamxuZXJCbFhjMzhuWHEyWll0U3JoZno2eGVtTyIsImp0aSI6ImY2MDUwYzIwMDM2ZjcwZjgzNWU5NTI5ZDllZTUzYzE5ZjhhYjVjYTViNGEzMzdjMzE3MTJmNThkNjcyZGE0OTVjZmFhNTlmNTJkNzA0MjlhIiwiaWF0IjoxNTgxOTE0NTc0LCJuYmYiOjE1ODE5MTQ1NzQsImV4cCI6MTU4MTkxODE3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ASTX-O3ZDzPi34GP-MRB-8-KuCU7qL3ZiShnhuwWgqLTIb3Y0Z9mJJGiEkZF6V3QOpBWRlACoSLEUcb1qFbg-Cj8pQTiaNK2rfMi5MWdPesyyePP6KeHXDP3prFgaNmt0dK13f6i2tKS8Ii9dDq72CndOc0RDsTmxWRABAhpRvSb6n6YCMyGTvm6CWzsFIR1pRhN8NQg9PqJ57TDP44zBQ0R8OFOc2Iw2e1Iu7lUZ4TbgWEVfcH17PGx7IRl_MxBN0m8GuEsClYrsVV1f2b8Tz1ZGbyiIekzcvpaeTNrmVC6WdioxEDa1zkoIca727rAQkvZQuZO0vVru5KHkmUeyA"
          }
        }
      )
        .then(response => response.json())
        .then(response => setPetInfo({ pets: response.animals }));
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
            ? petInfo.pets.map(item => (
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
