import { 
  WiCloud,
  WiFog,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiLightning,
  WiDayShowers
} from "react-icons/wi";

  function WeatehrIcon(props){
    let iconId = props.weather.id === 800 ? 0 : (parseInt(props.weather.weather[0].id) / 100).toFixed(0);
  switch (iconId) {
    case "0":
      return <WiDaySunny size="6rem" color="black" />;
    case "2":
      return <WiLightning size="6rem" color="black" />;
    case "3":
      return <WiDayShowers size="6rem" color="black" />;
    case "5":
      return <WiRain size="6rem" color="black" />;
    case "6":
      return <WiSnow size="6rem" color="black" />;
    case "7":
      return <WiFog size="6rem" color="black" />;
    case "8":
      return <WiCloud size="6rem" color="black" />;
  }
  }
  export default WeatehrIcon;