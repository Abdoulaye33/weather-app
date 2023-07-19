import React, { useEffect, useState } from "react";
import getAPIKey from "./API_KEY";

const Home = () => {
  const [jsonData, setJsonData] = useState(null);
  const [inputCountryName, setInputCountryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = getAPIKey(inputCountryName);
        const data = await fetch(API_KEY);
        const json = await data.json();

        // Note : la propriété 'list' n'existe pas dans l'objet JSON retourné par l'API
        // Vous pouvez ajuster cette partie en fonction de la structure réelle de l'objet JSON retourné.

        const citiesArray = json.list; 

        setJsonData(citiesArray);
        console.log(citiesArray);
        const imageLink = response.data.urls.regular
        setBackgroundImage(imageLink)
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données", error);
      }
    };

    fetchData();
  }, [inputCountryName]);

  const handleSearch = () => {
    // fetch les données quand le button est cliqué
    fetchData();
  };

  return (
    <div>
      {jsonData ? (
        <ul>
          {jsonData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>
          <input
            type="text"
            value={inputCountryName}
            onChange={(e) => setInputCountryName(e.target.value)}
            placeholder="Country Name"
          />
          <button onClick={handleSearch}>Search</button>
        <div
        className="TropSimple"
        style={{backgroundImage: `url(${backgroundImage})`}}
        >

        </div>
        </div>
      )}
    </div>
  );
};

export default Home;
