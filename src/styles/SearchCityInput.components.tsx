import styled from 'styled-components'
import {devices} from "../config";

export const Header = styled.header`
  font-size: 1.4em;
  text-align: center;
  color: dimgrey;
  margin-top: 2em;
  @media ${devices.tablet} {
    font-size: 1.8em;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 95%;
  margin: .5em auto;
  @media ${devices.tablet} {
    width: 70%;
    margin: 3em auto;
  }
  @media ${devices.desktop} {
    width: 35%;
    margin: 3em auto;
  }
`
export const Input = styled.input`
  width: 70%;
  background: white;
  border-radius: 3px;
  border: 1px solid lightgray;
  margin: .8em;
  padding: 1.2em;
  font-size: 1em;

  ::placeholder {
    color: gray;
  }

  &:focus {
    outline: none;
    border-color: cadetblue !important;
    box-shadow: inset 0 1px 1px rgba(95, 158, 160, 0.055), 0 0 4px rgba(95, 158, 160, 0.4);
  }

  @media ${devices.laptop} {
    padding: 1.6em;
    margin: .8em;
  }
`
export const Button = styled.button`
  width: 30%;
  background: white;
  color: gray;
  font-size: 1em;
  margin: .8em;
  padding: 1.2em;
  border: 1px solid lightgray;
  border-radius: 3px;

  &:hover {
    background: cadetblue;
    border-color: cadetblue;
    color: white;
  }

  @media ${devices.laptop} {
    padding: 1.6em;
  }
`;
