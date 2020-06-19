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
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJBZTBTSktEdnpzeTE0RVA5MUZTdzFmamxuZXJCbFhjMzhuWHEyWll0U3JoZno2eGVtTyIsImp0aSI6IjAxYWIzZTkzOWZhNzhkYzAyZjJiZDhhMTVhMjgyOTBmNTBiMDllZmUwNDU3MjhlNTgzM2M0YzE2MTQyYTBlMzBkNWQzYjA0MGM3OWZmMzg2IiwiaWF0IjoxNTkyNTIwODA5LCJuYmYiOjE1OTI1MjA4MDksImV4cCI6MTU5MjUyNDQwOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.NklxuHqSjIfq7cjYEjkixQu214gSmHfdpS6aC19mkB4dDUZMXGqNS10oImRnvh08rQnKSqvnVXfnU8N2lqExxJAP_uEGi2jN2gcgB0YYgP8opOz1sqdN-DVZ5_Srpiwp_A9GbmAkhBRk7h5EJAhg74YnQRfzAQHcq4UYNaAe1enLsu0mqPtyRgHWYAlU_falf4A36R_h8O8WYLbsznEYBhaB9ltldWaBNokZKP0Ga_7shnI1v101fmZ5j3QTkUiXRlObUfUMA12_EeGVDIdJI2JWZiA3Kmr9DASC6Zumyg8A0_WXyysKjRTuTuf5bA1nONiIsMn64lqKaX1GCTKqkg",
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
