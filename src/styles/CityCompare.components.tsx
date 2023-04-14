import styled from "styled-components";
import {devices} from "../config";

export const Box = styled.div`
  width: 44%;
  padding-left: 20px;
  margin-bottom: 1em;
  @media (max-width: 738px) {
    :nth-child(odd) {
      border-right: 1px solid rgba(117, 176, 178, .7);
    }
  }
  @media ${devices.tablet} {
    width: 30%;
    height: 100%;
    padding-left: 20px;
    :first-child, :nth-child(2) {
      border-right: 1px solid rgba(117, 176, 178, .7);
      height: 90%;
    }
  }
`

export const CityName = styled.h1`

  font-size: 1.3em;
  color: cadetblue;
  text-align: center;
  @media ${devices.tablet} {
    font-size: 1.6em
  }
  @media ${devices.desktop} {
    font-size: 2em
  }
`

export const TextField = styled.p`
  font-size: 1.2em;
  color: cadetblue;
  margin-bottom: .1em;
  @media ${devices.tablet} {
    font-size: 1.6em;
    margin-bottom: .2em;
  }
  @media ${devices.desktop} {
    font-size: 2em
  }
`
export const WeatherProperties = styled.span`
  font-size: .8em;
  color: #616161;
`

export const CityDiff = styled.span`
  font-size: .9em;
  color: #616161;
`

