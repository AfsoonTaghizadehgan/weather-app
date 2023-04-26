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
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day = new Date();
    let Month = month[day.getMonth()]
    let today= `${weekday[day.getDay()]} ${Month} ${day.getDate()} ${day.getFullYear()}`
    let minute= day.getMinutes()

    React.useEffect(()=>{
        console.log("new useEffect")
        const fetchData = async () => {
            //
            if(props.city!==""){
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=d914a0d6566efc1d7f49f4af49f8fe96&units=metric`)
                const data = await res.json()
                if(data.cod !== "404"){
                    setHasError(false)
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
}, [props.city, minute, hasError])




    if(hasError === false){    
        return(
            <main >
                <div>
                    { props.city!=="" &&
                    <div className='Weather-data'>
                        <h3>{today}</h3>
                        <h1 className='name'>{weatherData.name}</h1>
                        <h2 className='temp'>{weatherData.temp}ºC</h2>
                        <p className='feelslike'>feels like: {weatherData.feelsLike}ºC</p>
                        <div className='description'>{props.setDesc(weatherData.description, hasError)}</div>

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
                <h3 className='Weather-data'>City Was Not Found, Please enter a valid city...</h3>
            </div>
        )
    }    


}
