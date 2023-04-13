import styled from 'styled-components'

export const Input = styled.input`
  width: 70%;
  background: white;
  border-radius: 3px;
  border: 1px solid lightgray;
  margin: .8em;
  padding: 1.6em;
  font-size: 1em;
  ::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
    border-color: cadetblue !important;
    box-shadow: inset 0 1px 1px rgba(95, 158, 160, 0.055), 0 0 4px rgba(95, 158, 160, 0.4);
  }
`
export const Button = styled.button`
  width: 30%;
  background:  white;
  color: gray;
  font-size: 1em;
  margin: .8em;
  padding: 1.6em;
  border: 1px solid lightgray;
  border-radius: 3px;
  &:hover {
    background: cadetblue;
    border-color: cadetblue;
    color: white;
  }
`;
export const Box = styled.div`
      display: flex;
      flex-direction: row;
      text-align: center;
      width: 25%;
      margin: 3em auto;
    `