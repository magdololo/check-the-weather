import styled from "styled-components";
import {devices} from "../config";
export const CityWeatherContainer = styled.div`
  width: 95%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${devices.mobileM} {
    width: 90%;
    height: 20vh;
    margin: 2em auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${devices.laptopL} {
    width: 60%;
    height: 40vh;
    margin: 4em auto;
  }
`
export const Box = styled.div`
  width: 90%;
  @media ${devices.laptopL} {
    width: 50%;
  }
`
export const CityName = styled.h1`
  font-size: 1.7em;
  color: cadetblue;
  text-align: center;
  @media ${devices.laptopL} {
    font-size: 3em;
    text-align: center;
  }
`
export const PropertiesBox = styled.div`
  width: 80%;
  margin: 0 auto;
  @media ${devices.laptopL} {
    width: 45%;
  }
`
export const TextField = styled.p`
  font-size: 1.1em;
  color: cadetblue;
  @media ${devices.mobileL} {
    font-size: 1.3em;
    margin: 10px 0;
  }
  @media ${devices.laptopL} {
    font-size: 1.8em;
  }
`
export const WeatherProperties = styled.span`
  font-size: .8em;
  color: #616161;
`
export const ErrorMessage = styled.div`
  text-align: center;
  margin: 3em auto;
  font-size: 2em;
  color: red;

`