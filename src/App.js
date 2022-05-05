
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import { useRef, useState } from 'react';
import { API_KEY } from './Config';
import CityData from './Components/CityData';
import Loader from './Components/Loader/Loader';
import Error from './Components/Error/Error';
import Comments from './Components/Comments/Comments';

function App() {
  const inputRef = useRef();
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const [isClicked, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
    setIsClick(true);

  }

  return (
    <>
      <Header />
      <div className='form'>
        <form className='form1' onSubmit={submitHandler}>
          <input className='input' ref={inputRef} type='text' placeholder='Enter City Name...' />
          <button className='btn'>Search</button>
        </form>
      </div>
      {isError && !isLoading && <Error />}
      {isLoading && <Loader />}
      {isClicked && !isError && !isLoading && <CityData data={data} />}
      {isClicked && !isError && !isLoading && <Comments />}



    </>
  );
}

export default App;
