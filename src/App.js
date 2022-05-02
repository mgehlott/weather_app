
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import { useRef, useState } from 'react';
import { API_KEY } from './Config';
import CityData from './Components/CityData';

function App() {
  const inputRef = useRef();
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const [isClicked, setIsClick] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${API_KEY}`
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setData(data);
      setIsError(false);
    }
    catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsClick(true);

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

      {isClicked && !isError && <CityData data={data} />}



    </>
  );
}

export default App;
