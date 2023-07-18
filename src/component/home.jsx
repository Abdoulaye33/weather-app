import React from "react";
import API_KEY from "./API_KEY";

function App() {
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
      // Utilise ta clé API ici pour appeler l'API météo et récupérer les données
      // Par exemple, tu peux utiliser fetch() pour faire une requête HTTP vers l'API météo
      let lat = 12;
      let lng = 77;
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q={input},uk&APPID={API_KEY},`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error('Erreur lors de la récupération des données météo', error));
    }, []);
  
    return (
      <div>
        {/* Affiche les données météo ici */}
        {weatherData && (
          <div>
            <h1>Météo en temps réel</h1>
            <p>Température : {weatherData.temperature}</p>
            <p>Description : {weatherData.description}</p>
          </div>
        )}
      </div>
    );
  }
  

export default Home;