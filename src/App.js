
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

  if(city!=="" && description.includes("clouds")){
    inputStyle=`url(${PartialCloud})`
    
  }
  else if(city!=="" &&  ((description.includes("sun")) ||(description.includes("sky") ))){
    inputStyle=`url(${Sun})`
    
  }
  else if(city!=="" &&  description.includes("cloudy")){
    inputStyle=`url(${Cloudy})`
    
  }
  else if(city!=="" &&  ((description.includes("rain")) ||(description.includes("drizzle") ))){
    inputStyle=`url(${Rain})`
    
  }
  else if(city!=="" &&  description.includes("snow")){
    inputStyle=`url(${Snow})`
    
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
