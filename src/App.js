
import './App.css';
import Weather from './components/Weather'
import Weatherinput from './components/WeatherInput';
import React from 'react'

function App() {
  const [city, setCity]= React.useState("")
  function setCityInput(event){
    if (event.key === 'Enter') {
    // 👇 Get input value
      setCity(event.target.value)
  }
}
  return (
    <div className="App" >
      <Weatherinput
      setCityInput={setCityInput}
      city={city}
      />
      <Weather 
      city={city}/>
    </div>
  );
}

export default App;
