import React, { useEffect, useState } from "react";
import API_KEY from "./API_KEY";

const Home = () => {

  const [jsonData, setJsonData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(API_KEY)
        const json = await data.json()
        setJsonData(json)
        console.log(json)
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récuperation des données", error)
    }
  })  

  fetchData()

}, []);



  

export default Home;