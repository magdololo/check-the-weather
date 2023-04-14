import styled from "styled-components";
import {devices} from "../config";

export const PanelWithCities = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    height: 40vh;
  }
  @media ${devices.laptopL} {
    width: 75%;
  }
  @media ${devices.desktop} {
    width: 60%;
  }
`

export const Divider = styled.hr`
  width: 50%;
  margin: 20px auto;
  border-width: 0px;
  border-style: solid;
  border-color: rgba(117, 176, 178, .7);
  border-bottom-width: thin;
`
export const Subtitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: #757575;
  margin: 2em 0;
  @media ${devices.tablet} {
    font-size: 1.6em;
  }
`