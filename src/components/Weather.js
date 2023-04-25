import '../App.css';
import React from 'react';
// import partialCloud from './images/partialCloud.png'

export default function Weather(props) {

    const [weatherData, setWeatherData]=React.useState({
        temp: "",
        feelsLike: "",
        humidity: "",
        windSpeed: "",
        description:"",
        name:""
        })
    const [hasError, setHasError] = React.useState(false);

    
    React.useEffect(()=>{
        const fetchData = async () => {
            setHasError(false)
            if(props.city!==""){
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=d914a0d6566efc1d7f49f4af49f8fe96&units=metric`)
                const data = await res.json()
                if(data.cod !== "404"){
                    setWeatherData(preveState => ({
                        ...preveState,
                        temp: data.main.temp,
                        feelsLike: data.main.feels_like,
                        windSpeed: data.wind.speed,
                        description: data.weather[0].description,
                        name: data.name,
                        humidity: data.main.humidity
                        }))
                }  
                else{
                    setWeatherData("")
                    setHasError(true)
                        
                }
        }
    }
    fetchData();
}, [props.city, weatherData.temp])

    

    if(hasError === false){    
        return(
            <main >
                <div>
                    { props.city!=="" &&
                    <div className='Weather-data'>
                        <h1 className='name'>{weatherData.name}</h1>
                        <h2 className='temp'>{weatherData.temp}ºC</h2>
                        <p className='feelslike'>feels like: {weatherData.feelsLike}ºC</p>
                        <div className='description'>{props.setDesc(weatherData.description)}</div>

                        <div className='extra-container'>
                            <div className='extra humidity'>Humidity: {weatherData.humidity}%</div>
                            <div className='extra wind'>Wind Speed:{weatherData.windSpeed} km/h </div>
                        </div>
                        
                      </div>  
                    }
        
            </div>
        </main>
        )
    }
    else{
        return(
            <div >
                <br></br>
                <p>City Was Not Found, Please enter a valid city...</p>
            </div>
        )
    }    


}
