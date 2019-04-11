import React from 'react';

const Weather = (props) => {
    return (
        <div>
            <div className='info'>

                { props.temprature && 
                    <p className='info_key'>
                        Temprature: <span className='info_value'> {Math.floor(props.temprature - 273.15)} &#8451; </span> </p>}
                { props.city && 
                    <p className='info_key'>
                        City: <span className='info_value'>{props.city} </span> </p>}
                { props.country && 
                    <p className='info_key'>
                        Country: <span className='info_value'>{props.country} </span> </p>}
                { props.humidity && 
                    <p className='info_key'>
                        Humidity: <span className='info_value'>{props.humidity} % </span> </p>}
                { props.description && 
                    <p className='info_key'>
                        Description: <span className='info_value'>{props.description} </span> </p>}
            
            </div>

        </div>
    )
}


export default Weather;