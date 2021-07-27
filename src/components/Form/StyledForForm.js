import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  font-family: Orbitron, Serif;
  font-weight: normal;
  align-items: center;
 
`
export const StyledLabel = styled.label`
  width: 350px;
  margin: 10px 0;
`
export const StyledInput = styled.input`
  width: 200px;
  height: 1.5em;
  padding: 3px;
  margin: 5px;;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border: 3px solid ${(props) => props.theme.bordersColor};

`
export const StyledLoginBtn = styled.button`
  width: 150px;
  background-color: white;
  padding: 2px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.bordersColor};
  &:hover {
    background-color: ${(props) => props.theme.linkColors};
  }
`
export const StyledGreetings = styled.h4`
  font-family: Orbitron, sans-serif;
  font-weight: bold;
`