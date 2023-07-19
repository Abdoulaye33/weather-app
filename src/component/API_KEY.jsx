const getAPIKey = (inputCountryName) => {
  const API_KEY = `http://api.openweathermap.org/data/2.5/weather?q=${inputCountryName},&APPID=c7572f88749eaaba5bb2e1ae09edd35d`;
  return API_KEY;
};

export default getAPIKey;