
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

// Application has two components, one is for taking city input, and the other is for connecting
// with Api and returning weather information.
//first city name is returned from weatherinput component, and send back to the weather component
//weather description is returned from weather component for setting up the background image based
//on the weather statements. 

function App() {
  
  const [city, setCity]= React.useState("")
  const [description, setDescription]= React.useState("")

  let inputStyle=`url(${GeneralImage})`

  //function for setting up the city name when user uses the "Enter" key after writing their desirable city
  function setCityInput(event){
    if (event.key === 'Enter') {
    // 👇 Get input value
      setCity(event.target.value)
  }
}

//function for setting up description to change the background image
  function setDesc(desc){
      setDescription(desc)

    return(
      <h3>{description}</h3>
    )
  }
  

  //different weather statement changed the inputStyle
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

  //App html which is consisted of two components
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
