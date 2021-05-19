import React from 'react';
import style from "./weather.module.css";


function Weather(props) {
    return(
        <div className={style.container}>
            <div className={style.sub}>
            <div className={style.header}>
                <h1 style={style.city}>{props.city}, {props.country}</h1>
                <p>{props.description}</p>
            </div>
            
            <h1 className={style.temp}>{props.temp}</h1>
            <div className={style.info}>
                <h4>Humidity <br/> {props.humidity}%</h4>
                <h4>Pressure  <br/>{props.pressure}</h4>
            </div>
            <div className={style.foot}>
                <h4>Highest temperature  <br/>{props.max}</h4>
                <h4>Lowest Temperature  <br/>{props.min}</h4>
            </div>
            
            <h4>Description : <br/>{props.description}</h4>
            </div>
        </div>
    )
}

export default Weather;