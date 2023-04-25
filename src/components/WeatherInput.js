import '../App.css';
import React from 'react';
//import partialCloud from './images/partialCloud.png'

export default function Weatherinput(props) {
  const style={
    width:'70%',
    backgroundColor: 'azure',
    display: 'inline-block',
    padding: '10px 0px 10px 30px',
    lineHeight: '120%',
    position: 'relative',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '15px',
    left: '15%',
    right: '15%'
  }

    return(
      <div
      style={{
        position: 'relative',
        top: props.city? '12px' : '30%'}}>
        <h1  style={{
          fontSize: props.city? 'xx-large' : '300%',
          position: 'relative',
          left: '15%'}}
         className='title' >Weather Forecast by Afsoon &hearts;</h1>
        <input
            type="text" 
            className="city--input" 
            placeholder='Enter a City...'
            onKeyDown={ props.setCityInput} 
            name="city"
            style={style}
            />
      </div>
    )

    
}
