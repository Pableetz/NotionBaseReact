import axios from "axios";
import React, { useState } from "react";
import { fetcher } from "../../Services/Fetcher";
// import { fetcher } from "../../Services/Fetcher";

const ChuckNorris: React.FC = () => {
  const [joke, setJoke] = useState<string>("");

  // fetch classique
  const getJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJoke(data.value);
      });
  }

// fetch avec axios
  
  //  const getJoke = () => {

  //     axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
  //       setJoke(res.data.value);
  //     });
  //   }


    //   const getJoke = () => {
  //     axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
  //       setJoke(res.data.value);
  //     });
  //   };

  // requetes fetch chuck norris

  // Service fetch
  // const getJoke = () => {
  //   fetcher("https://api.chucknorris.io/jokes/random").then((data) => {
  //     setJoke(data.value);
  //   });

  // }

  return (
    <div>
      <h1>Les blagues de Chuck Norris</h1>
      <button onClick={getJoke}>Générer une blague</button>
      <p>{joke}</p>
    </div>
  );
};

export default ChuckNorris;
