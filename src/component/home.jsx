import React, { useEffect, useState } from "react";
import API_KEY from "./API_KEY";

const Home = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(API_KEY);
        const json = await data.json();
        const citiesArray = json.list; 
        setJsonData(citiesArray);
        console.log(citiesArray);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {jsonData ? (
        <ul>
          {jsonData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default Home;
