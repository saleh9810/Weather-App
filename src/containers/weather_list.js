import React, { Component } from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'
import Cart from '../components/Cart';
class WeatherList extends Component {

        renderWeather(cityData, key) {

            if(!cityData) {
                return <img key={key} className="error" src="https://img.icons8.com/plasticine/250/000000/error-cloud.png"/>
            }

            const name = cityData.city.name;
            const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273) ;
            
            

            return (
                <div className="weather-cart" key={name}>
                    <div><Cart name={name}  data={temps} /> </div>     


                </div>
            )
        }

        
    render() { 
        return ( 
            <div className="weather"> 
                        {this.props.weather.map(this.renderWeather)}
            </div>
         );
    }
}
 
function mapStateToProps({weather}) {

    return {weather}
}

export default connect(mapStateToProps)(WeatherList);