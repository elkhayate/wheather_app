import React, { Component } from 'react';

import Weather from './components/Weather';


const api_key = "bbf619c16870c7aa052f3f83109bba96";


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       city : undefined,
       country : undefined,
       temp : undefined,
       temp_max : undefined,
       tem_min : undefined,
       pressure : undefined,
       humidity : undefined,
       desription : undefined,
       newcity : undefined
    }
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.newcity ? this.state.newcity: "Rabat"}&appid=${api_key}`
    );
    const response = await api_call.json();
    console.log(response)
    this.setState({
      city : response.name,
      country : response.sys.country,
      temp : response.main.temp,
      temp_max : response.main.temp_max,
      temp_min : response.main.temp_min,
      pressure : response.main.pressure,
      humidity : response.main.humidity,
      description : response.weather[0].description
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.getWeather();
    this.setState({
      newcity : ""
    })
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }


  render() {
    const state = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
                <input 
                name = "newcity"
                type = "text"
                value = {state.newcity}
                onChange = {this.handleChange}
                placeholder = "Add city here..."
                />
                <button>Get Weater</button>
          </form>
        </div>
        <Weather 
          city = {state.city}
          country = {state.country}
          temp = {state.temp}
          humidity = {state.humidity}
          pressure = {state.pressure}
          max = {state.temp_max}
          min = {state.temp_min}
          description = {state.description}
        />
      </div>
    )
  }
}