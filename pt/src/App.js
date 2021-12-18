import './App.css';
import React, { useState } from 'react';
import Recommand from './weather.js';
import WeatehrIcon from './weathericons.js';

const api = {
  key:"aaa27313875f00a755edeefc92500459",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
  const[query,setQuery] =useState('');
  const[weather,setWeatehr] = useState('');
  const search = evt =>{
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res=>res.json())
      .then(result =>{setWeatehr(result);
        setQuery('');
      });
    }
  }
  
  const dateBuilder = (d)=>{
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      // sunday 먼저..!!
        let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];
        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate();
        let hours = d.getHours();

      return `${day} ${date} ${month} ${year}`;
}
    return (
      <div className='App'>
      <div className='background'>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className='notrecommand'>
          <div className='date'>{dateBuilder(new Date())}</div>
          <h1 className='city'>지금<span>{weather.name}</span>의날씨는</h1>
          <ul>
            <li class ="weatherNow">{weather.weather[0].main}</li>
            <li><WeatehrIcon weather={weather}></WeatehrIcon></li>
            <li><span className='Temperature'>{Math.round(weather.main.temp)}</span>℃입니다</li>
            <Recommand weather={weather} />
          </ul>
          <ul className ="anotherInfo">
          <li>체감:{weather.main.feels_like}℃</li>
          <li>최고:{weather.main.temp_max}℃</li>
          <li>최저:{weather.main.temp_min}℃</li>
          </ul>
          </div>
      </div>
      ) :('')}
        <div className='search-box'>
        <input type="text" className='where' placeholder="도시 입력" onChange={(e)=>{setQuery(e.target.value)}} value = {query} onKeyPress={search}></input>
        <input type="text" style={{display:'none'}}></input>
        <button>검색</button>
        </div>
      </div>
      </div>
  )
}


/*리액트에서 class=""를 넣고 싶으면 className="" 이라고 사용*/
   //"변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶으면"
export default App;
