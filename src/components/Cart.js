import React from 'react'
import _ from 'lodash'





function average(data) {
    return _.round(_.sum(data)/data.length);
}

const weather = (data, name) => {
if(average(data) > -15 && average(data) < 15) {
    return (
        <div className="cloudy">
         
         <h3>{name}</h3>
         <h2>{average(data)} °C</h2>
         <i className="fas fa-snowflake"></i>
        </div>
    )

    }

    if(average(data) > 15 && average(data) < 33) {
        return (
            <div className="sunny">
           

            <h3>{name}</h3>
            <h2>{average(data)} °C</h2>
            <i className="fas fa-cloud-sun"></i>     
            
            </div>
        )
    
        }

        if(average(data) > 33 && average(data) < 50) {
            return (
                <div className="hot">
                
                <h3>{name}</h3>
                <h2>{average(data)} °C</h2>
                <i className="fas fa-sun"></i>
                </div>
            )
        
            }
}

 const Cart = (props) => {
    return (
        <div className="cart">
       
            <div>
                {weather(props.data, props.name)}
            </div>
        </div>
    )
}

export default Cart
