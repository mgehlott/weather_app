
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import { useRef } from 'react';
import { API_KEY } from './Config';
function App() {
  const inputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&appid=${API_KEY}`
    try {
      const { data } = await axios.get(url);
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <Header />
      <div className='form'>
        <form onSubmit={submitHandler}>
          <input className='input' ref={inputRef} type='text' placeholder='Enter City Name...' />
          <button className='btn'>Search</button>
        </form>
      </div>

    </>
  );
}

export default App;
