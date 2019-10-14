import React, { Component } from 'react'
import './App.scss';
import Title from './Title/Title';
import Form from './Form/Form';
import WeatherData from './WeatherData/WeatherData';

const API_KEY = "f6d26dad2b2d8f6ebd987283a4e5019f";

export class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      temperature: "",
      city: "",
      country: "", 
      humidity: "",
      description: "",
      error: ""
    }

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await apiCall.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp - 273.15,
      city: data.name,
      country: data.sys.country, 
      humidity: data.main.humidity,
      description: data.weather[0].description
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <WeatherData 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    )
  }
}

export default App
