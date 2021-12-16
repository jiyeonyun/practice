import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  let [city,citySet] = useState('서울');
  let [Temperature,TemperatureSet] = useState('3');
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1cb3f6bc10c3213a2c7e8251f0799a12')
  .then((result)=>{console.log(result.data)});
  
  return (
    <div className="App">
    <div className='background'>
      <h1 className='title'>오늘{city}의날씨는</h1>
      <ul>
        <li><i class="far fa-snowflake"></i></li>
        <li>눈이내려요</li>
        <li><span className='Temperature'>{Temperature}</span>℃입니다</li>
      </ul>
      <h3>🧣두꺼운 옷을 입으세요🧤<br/>
      패딩,두꺼운코트,목도리 등
      </h3>
      <form>
        <input type="text" className='where' placeholder="도시 입력" onChange={(e)=>{}}></input>
        <button onClick={()=>{
          
        }}>검색</button>
      </form>
    </div>
    </div>
  );
}
/*리액트에서 class=""를 넣고 싶으면 className="" 이라고 사용*/
   //"변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶으면"
export default App;
