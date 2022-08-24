import React, { useState } from "react";
import axios from 'axios'
import ApiKey from '../src/Utils/Key'
import { WiDayCloudyGusts } from "react-icons/wi";
import { WiNightAltRain } from "react-icons/wi";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt&appid=${ApiKey}`
  
  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="App">  
        <h1>Previsão do tempo</h1>
      <div>
       <input 
        onChange={e => setLocation(e.target.value)}
        placeholder="Digite o lugar"
        onKeyPress={searchLocation}
        value={location}
        type="text"
       />
       <div className='city'>{data.name}</div>
    </div>
        <div className='container'>
        <WiDayCloudyGusts className="icon"/>
         <div className='items'>
         <div><p>Graus: {data.main ? <span>{data.main.temp.toFixed()}°</span> : null}</p></div>
         <hr></hr>
          <div><p>Máxima: {data.main ? <span>{data.main.temp_max.toFixed()}°</span> : null}</p></div>
          <hr></hr>
          <div><p>Mínima: {data.main ? <span>{data.main.temp_min.toFixed()}°</span> : null}</p></div>
          <hr></hr>
          <div><p>Sensação: {data.main ? <span>{data.main.feels_like.toFixed()}°</span> : null}</p></div>
          <hr></hr>
          <div><p>Umidade: {data.main ? <span>{data.main.humidity}%</span> : null}</p></div>
          <hr></hr>
          <div><p>Tempo: {data.weather? <span>{data.weather[0].description}</span> : null}</p></div>
          <hr></hr>
         </div>
        </div> 
    </div>
  );
}

export default App;
