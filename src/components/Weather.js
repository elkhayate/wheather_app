import React from 'react';
import style from "./weather.module.css";
import rectangle from "../img/rectangle.png";


function calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
}

function getDate() {
    let today = new Date();
    let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
    let date = `${today.getDate()} ${months[today.getMonth()]}`;
    return date

}
function Weather(props) {
    return(
            <div className={style.container}>
            
                <h1 className={style.city}>{props.city}, {props.country}</h1>
                <p className={style.date}>Today, {getDate()}</p>
                <h1 className={style.temp}>{calCelsius(props.temp)}°</h1>
                <p className={style.descri}>{props.description}</p>
                <div className={style.sub}>
                    <div className={style.name}>
                        <h4>Humidity</h4>
                        <h4>Pressure</h4>
                        <h4>Temperature</h4>
                    </div>
                    <div className={style.sep}>
                        <img src={rectangle} alt = "rectangle"/>
                    </div>
                    <div className={style.info}>
                        <h4>{props.humidity}%</h4>
                        <h4>{props.pressure} hPa</h4>
                        <h4>{calCelsius(props.max)}°/ {calCelsius(props.min)}°</h4>
                    </div>
                </div>
                
           
            </div>
    )
}

export default Weather;

