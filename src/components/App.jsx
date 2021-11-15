import '../style/index.css';
import React, {useEffect, useState} from 'react';
import {getCountries, getWeather} from '../modules/countries';
import Header from './Header.jsx';
import Main from './Main.jsx';

function App() {

  const [countries, setCountries] = useState();  
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState({});

  const fillState = async () => {
    setCountries(await getCountries());
    setIsLoading(false);
  }
  useEffect(() => {
    fillState();
  }, []);

  const handlePick = async (value) => {
    const pick = countries.find(x => x.country === value);
    const weather = await getWeather(pick);
    setWeather(weather);
  }

  return (
    <React.Fragment>
      {!isLoading && <Header data={countries} countryPicked={handlePick} />}
      
      <Main weather={weather} />
      <footer>Footer</footer>
    </React.Fragment>
  );
}


export default App;
