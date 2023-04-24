
import './App.css';
import Weather from './components/Weather'
import Weatherinput from './components/WeatherInput';
import React from 'react'
import GeneralImage from './components/images/GeneralWeather.png'
import Cloud from './components/images/partialCloud.png'

function App() {
  
  const [city, setCity]= React.useState("")
  const [description, setDescription]= React.useState("")

  let inputStyle=""

  function setCityInput(event){
    if (event.key === 'Enter') {
    // 👇 Get input value
      setCity(event.target.value)
  }
}

function setDesc(desc){
  setDescription(desc)
  return(
    <h3>{description}</h3>
  )
}

 if(description==="broken clouds"){
  inputStyle=`url(${Cloud})`
  
}
else{
  inputStyle=`url(${GeneralImage})`
}

  return (
    <div className="App" 
    style={{ backgroundImage: inputStyle}}
    >
      <Weatherinput
      setCityInput={setCityInput}
      city={city}
      />
      <Weather 
      city={city}
      setDesc={setDesc}
      />
    </div>
  );
}

export default App;
