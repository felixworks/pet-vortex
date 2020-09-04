import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../config.js";
import Card from "../Card/Card.js";

function List() {

const [petInfo, setPetInfo] = useState({ pets: [] });
  const [petParams, setPetParams] = useState({
    type: "Dog",
    breed: "Affenpinscher"
  });

  useEffect(() => {
    const fetchPets = async () => {
      const result = await fetch(
        // TODO add petParams here and add the type and breed function to API
        `${API_BASE_URL}`,
        {
          method: "GET",
        }
      )
        .then(response => response.json())
        .then(response => setPetInfo({ pets: response.animals }))
    };
    fetchPets();
  }, []);

  // TODO create Tinder-style cards for each dog, and arrange them in a circle that aligns with the viewer. So one card is in focus, and you can see the next 1-2 cards on each side (like a roulette wheel)
return (
    <ul>
          {petInfo
            ? petInfo.pets.map((item, index) => (
              <>
                <Card/>
                <li key={item.id} className={index + "-list-item"}>
                  <a href={item.url}>{item.name}<img src={item.photos[0] ? item.photos[0].small :  ""} alt={"Dog photo " + item.id}/></a>
                </li>
              </>
              ))
            : ""}
        </ul>
)

}

export default List;