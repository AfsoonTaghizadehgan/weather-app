import '../App.css';
import React from 'react';


//Weather component handles the general API connection, returning weather data, and send the description
//to the App. also handles error when the entered city is not valid.
//this component also display the date on the screen
//this component has two different returns based on error

export default function Weather(props) {

    //weather data object with 6 different weather specifications 
    const [weatherData, setWeatherData]=React.useState({
        temp: "",
        feelsLike: "",
        humidity: "",
        windSpeed: "",
        description:"",
        name:""
        })

    //using error when the entered city is not valid and error 404 is returned 
    const [hasError, setHasError] = React.useState(false);
    //weekdays and months for displaying the day and month on the screen
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let day = new Date();
    let Month = month[day.getMonth()]
    let today= `${weekday[day.getDay()]} ${Month} ${day.getDate()} ${day.getFullYear()}`
    let minute= day.getMinutes()

    //useEffect runs again when the city name changes, or one minutes passes
    React.useEffect(()=>{
        console.log("new useEffect")
        const fetchData = async () => {
            //if user deleted the city and pressed enter, the city goes back to empty and api won't run again
            if(props.city!==""){
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=d914a0d6566efc1d7f49f4af49f8fe96&units=metric`)
                const data = await res.json()

                //if city is not valid, error 404 is returned
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
                //settung error to true and remove all the weather statements in case an error happens 
                else{
                    setWeatherData("")
                    setHasError(true)
                        
                }
        }
    }
    fetchData();
}, [props.city, minute, hasError])



//showing weather statement in case no error happens and city name is valid
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

    //showing a message to the user when the entered city is not valid
    else{
        return(
            <div >
                <br></br>
                <h3 className='Weather-data'>City Was Not Found, Please enter a valid city...</h3>
            </div>
        )
    }    


}
