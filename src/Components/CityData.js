import React from 'react'
import './CityData.css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getTodayDate = (date) => {

    let datee = '';
    const day = date.getDay();
    const month = date.getMonth();
    const dd = date.getDate();
    const year = date.getFullYear();

    datee = `${days[day]} ${months[month]} ${dd} ${year}`;
    return datee;

}

export default function CityData({ data }) {

    const date = new Date(data.dt * 1000);
    const temp = data.main.temp;
    const dd = new Date(data.sys.sunrise);
    const sr = `${dd.getHours()}:${dd.getMinutes()}:${dd.getSeconds()}`;
    const dd2 = new Date(data.sys.sunset);
    const ss = `${dd2.getHours()}:${dd2.getMinutes()}:${dd2.getSeconds()}`;
    const iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    return (
        <div className='container'>
            <p className='title'>{`${data.name},${data.sys.country},${getTodayDate(date)}`}</p>
            <div className='info'>
                <div className='left'>
                    <h1>{temp.toFixed()}&deg;C</h1>
                    <span className='icon'>
                        <img src={iconurl} alt={data.weather[0].main} />
                    </span>
                </div>
                <div className='right'>
                    <div className='weatherdata'>
                        <span>Weather: </span>
                        <span className='bold'>{data.weather[0].main}</span><br></br>
                        <span>Wind: </span>
                        <span className='bold'>{data.wind.speed} km/hr</span>
                    </div>
                    <div className='weatherdata'>
                        <span>Humidity: </span>
                        <span className='bold'>{data.main.humidity}%</span><br></br>
                        <span>Pressure: </span>
                        <span className='bold'>{data.main.pressure} Pa</span>
                    </div>
                    <div className='weatherdata'>
                        <span>Max Temp: </span>
                        <span className='bold'>{data.main.temp_max.toFixed()}&deg;C</span><br></br>
                        <span>Min Temp: </span>
                        <span className='bold'>{data.main.temp_min.toFixed()}&deg;C</span>
                    </div>
                    <div className='weatherdata'>
                        <span>Sunrise: </span>
                        <span className='bold'>{sr}</span><br></br>
                        <span>Sunset: </span>
                        <span className='bold'>{ss}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

