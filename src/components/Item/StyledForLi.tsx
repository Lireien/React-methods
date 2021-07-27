import styled from "styled-components";

type TStyledLi = {
    isMovable: boolean;
    isMain: boolean;
    isLinkable: boolean;
    isConstructor: boolean;
}

const StyledLi = styled.li<TStyledLi>`
  position: relative;
  cursor: pointer;
  margin: 2px;
  padding: 10px 0;
  list-style: none;
  display: flex;
  justify-content: ${(props: any) =>
          props.isMovable ? "space-between" : "center"};
  text-align: center;
  background-color: ${(props) => props.theme.liBgColor};
  border: 1px solid ${(props) => props.theme.bordersColor};
  border-radius: 4px;

}
`;
export const StyledButton = styled.button`
  margin: 0 5px;
  padding: 5px;

  &:hover {
    border: 2px solid ${(props) => props.theme.bordersColor};
  }
`;
export const StyledButtonRemove = styled(StyledButton)`
  position: absolute;
  right: -2.5em;
  color: red;
  font-weight: bold;
`;
export const StyledA = styled.a`{
  color: ${(props) => props.theme.linkColors};
  text-decoration: none;
  font-family: Orbitron, sans-serif;
  font-weight: normal;
};

  &:hover {
    font-weight: 700;
  }

  &:visited {
    color: ${(props) => props.theme.linkColors}
  }`
export default StyledLi;