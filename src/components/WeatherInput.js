import '../App.css';
import React from 'react';
//import partialCloud from './images/partialCloud.png'

export default function Weatherinput(props) {
    const style={
    top: props.city? '32px' : '50%',
      width: '80%',
      display: 'inline-block',
      padding: '10px 0px 10px 30px',
      lineHeight: '120%',
      position: 'relative',
      borderRadius: '20px',
      outline: 'none',
      fontSize: '20px',
      left: '10%',
      right: '10%'
    }

    return(
        <input
            
            type="text" 
            className="city--input" 
            placeholder='Enter a City...'
            onKeyDown={props.setCityInput} 
            name="city"
            style={style}
            />
    )

    
}