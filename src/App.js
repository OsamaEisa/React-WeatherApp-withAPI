import React, { Component } from 'react';
import Weather from './components/Weather';
import FormWeather from './components/FormWeather';

const API_KEY = '8c8220747523b2fc40f08bc6e81250aa';

class App extends Component {

  state = {
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  /************************ API ***************************/
  getWeather = async (e) => {
    e.preventDefault()

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city !== '' && country !== '') {
    const api_fetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_fetch.json();
    console.log(data)
    
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:''
      })
    } else {
      this.setState({
        error: 'Please enter city & country !'
      })
    }
  }


  render() {
    return (
      <div className="wrapper">
        <div className='form-container'>
          <h1 className='title'>Weather App</h1>

          <FormWeather getWeather={this.getWeather}/>
          <h3 className='errmsg'>{this.state.error}</h3>
          <Weather temprature ={this.state.temprature}
                city = {this.state.city}
                country = {this.state.country}
                humidity ={this.state.humidity}
                description ={this.state.description} />
        </div>

      </div>
    );
  }
}

export default App;
