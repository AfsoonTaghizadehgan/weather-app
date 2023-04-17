import '../App.css';
import React from 'react';
import partialCloud from './images/partialCloud.png'

export default function Weather(props) {

    const [weatherData, setWeatherData]=React.useState({
        temp: "",
        feelsLike: "",
        humidity: "",
        windSpeed: "",
        description:"",
        name:""
        })
    React.useEffect(()=>{
    async function getWeatherData() {
        if(props.city!==""){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=d914a0d6566efc1d7f49f4af49f8fe96&units=metric`)
        const data = await res.json()

         setWeatherData(preveState => ({
            ...preveState,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            name: data.name,
            humidity: data.main.humidity
            }))
            console.log(data)  
    }
}
    getWeatherData()
}, [props.city, weatherData.temp])

    return(
        <main className=''
        style={{ 
            backgroundImage: `url(${partialCloud})` 
          }}>
            <div className='city--form'>
                {/* <img src={partialCloud}></img> */}
                { props.city!=="" && 
                <div >
                    <h2>{props.city}</h2>
                    <p>{weatherData.description}</p>
                    <p>{weatherData.name}</p>
                    <p>{weatherData.temp}</p>
                    <p>{weatherData.feelsLike}</p>
                    <p>{weatherData.humidity}</p>
                    <p>{weatherData.windSpeed}</p>
                </div>}
    
        </div>
    </main>
    )

   

}
