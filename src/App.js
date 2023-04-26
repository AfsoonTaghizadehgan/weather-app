
import './App.css';
import Weather from './components/Weather'
import Weatherinput from './components/WeatherInput';
import React from 'react'
import GeneralImage from './components/images/GeneralWeather.png'
import PartialCloud from './components/images/partialCloud.png'
import Sun from './components/images/sun.png'
import Cloudy from './components/images/cloudy.png'
import Rain from './components/images/rain.png'
import Snow from './components/images/snow.png'

function App() {
  
  const [city, setCity]= React.useState("")
  const [description, setDescription]= React.useState("")

  let inputStyle=`url(${GeneralImage})`

  function setCityInput(event){
    if (event.key === 'Enter') {
    // 👇 Get input value
      setCity(event.target.value)
  }
}

  function setDesc(desc, error){
    if(error === false){
      setDescription(desc)
    }
    else(
      setDescription("")
    )
    return(
      <h3>{description}</h3>
    )
  }
  

  if(city!==""){
    if(description.includes("clouds")){
      inputStyle=`url(${PartialCloud})`  
    }
    else if((description.includes("sun")) ||(description.includes("sky"))){
      inputStyle=`url(${Sun})`
    }
    else if(description.includes("cloudy")){
      inputStyle=`url(${Cloudy})`
   }
    else if((description.includes("rain")) ||(description.includes("drizzle"))){
      inputStyle=`url(${Rain})`
   }
    else if(description.includes("snow")){
      inputStyle=`url(${Snow})`
  }
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
