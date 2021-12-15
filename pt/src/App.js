import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let posts = '강남 고기 맛집';
  let [title,titleSet] = useState(['남자 코트 추천', '강남 우동 맛집','당산역카페']);
  let [heart,heartSet] = useState(0);

  function titleChange(){
    let newtitle = [...title]
    newtitle[0] = '여자 코트 추천';
    titleSet(newtitle);
  }
  function arrayChange(){
    let arrayChange = [...title];
    arrayChange.sort();
    titleSet(arrayChange);
  }
  return (
    <div className="App">
        <div className="black-nav"> 
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ title[0] }<span onClick={()=>{heartSet(heart+1)}}>❤️</span>{heart}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <button onClick={()=>{titleChange()}}>제목변경</button>
      <button onClick={()=>{arrayChange()}}>가나다 정렬</button>
    </div>
  );
}
   /*리액트에서 class=""를 넣고 싶으면 className="" 이라고 사용*/
   //"변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶으면"
export default App;
