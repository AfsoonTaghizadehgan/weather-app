
import './App.css';
import Weather from './components/Weather'
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
      <input 
                type="text" 
                className="city--input" 
                placeholder='Enter a city'
                onKeyDown={setCityInput} 
                name="city"
                />
      <Weather 
      city={city}/>
    </div>
  );
}

export default App;
