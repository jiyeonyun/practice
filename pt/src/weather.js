import React, { useEffect, useState } from 'react';

function Recommand(props){
    let temper = props.weather.main.temp 
            if(temper<4){
            return <h3 className='recommand'>🧣두꺼운 옷을 입으세요🧤<br/>패딩,두꺼운코트,목도리 등</h3>
            }
            else if(4 <= temper < 8){
                return <h3 className='recommand'>🧥아우터를 꼭 챙기세요🧵<br/>코트,가죽자켓,니트 등</h3>
            }
            else if(8<= temper <11){
            return <h3 className='recommand'>🧥가벼운 아우터는 어떨까요?👖<br/>자켓,가디건,청바지 등</h3>
            }
            else if(11<= temper <16){
            return <h3 className='recommand'>🧶니트나 가디건 맨투맨 정도가 좋겠어요🧦<br/>니트, 가디건, 맨투맨,후드티 등</h3>
            }
            else if(16<= temper <22){
            return <h3 className='recommand'>👚얇은 셔츠나 반팔은 어떨까요?👔<br/>얇은 셔츠, 반팔, 반바지 등</h3>
            }
            else{
            return <h3 className='recommand'>👗민소매나 반팔 원피스는 어떨까요?👕<br/>민소매,반팔,반바지,원피스 등</h3>
            }
}
    export default Recommand;

