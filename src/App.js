import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';

function App() {
  const [celcius,setCelcius]=useState('');
  const [fahrenheit,setFahrenheit]=useState('');
  const convertToCelcius=(f)=>{
    const c=(f-32)*5/9;
    setCelcius(c.toFixed(2));
  }
  const convertToFahrenheit=(c)=>{
    const f=(c*9/5)+32;
    setFahrenheit(f.toFixed(2));
  }
  const handleCelciusChange=(e)=>{
    const value=e.target.value;
    convertToFahrenheit(value);
    setCelcius(value);
  }
  const handleFahrenheitChange=(e)=>{
    const value=e.target.value;
    convertToCelcius(value);
    setFahrenheit(value);
  }
  const container={
    marginTop:"400px",
    marginLeft:"500px",
    border:"1px solid",
    borderRadius:"10px",
    width:'700px',
    padding:'50px',
    backgroundColor:'#43d1d0'
  }
  return (
    <div style={container}>
    <div className="App">
      <h2>Temperature Converter</h2>
      <label>
        Celcius:
        <input type='number' value={celcius} onChange={handleCelciusChange} placeholder='Enter Celcius'/>
        <span>{celcius &&`=${celcius} ℃`}</span>
      </label>
      <br/>
      <label>
        Fahrenheit:
        <input type='number' value={fahrenheit} onChange={handleFahrenheitChange} placeholder='Enter Fahrenheit'/>
        <span>{fahrenheit&&`=${fahrenheit} °F`}</span>
      </label>
    </div>
    </div>
  );
}

export default App;
