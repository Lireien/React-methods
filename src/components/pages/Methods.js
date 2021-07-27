import List from "../List";
import {LIST_TYPES} from "../../const";
import StyledMainSection from "./Main/StyledMainSection";
import styled from "styled-components";

export const StyledH3 = styled.h3`
  font-family: Orbitron, sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  text-shadow: 0 4px 3px rgb(0 0 0 / 50%),
  0 8px 13px rgb(0 0 0 / 50%),
  0 18px 23px rgb(0 0 0 / 50%);
`


const Methods = () =>
    <StyledMainSection>
        <StyledH3> Learn more about all methods</StyledH3>
        <List title={LIST_TYPES.MAIN} isMovable={false} isLinkable={true}/></StyledMainSection>


export default Methods;
