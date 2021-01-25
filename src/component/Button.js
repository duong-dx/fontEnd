import styled from "styled-components";
import {defaultTheme, typeCale} from "../utils";


const Button = styled.button`
  padding: 12px 24px;
  border: none;
  font-size: ${typeCale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.5s linear, color 0.5s linear;
  
  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorPrimary};
  }
  
  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover}
    outline-offset: 3px;
  }
  
  &:active {
   background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorPrimary}
  }
`
const DangerButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  
`;

const DangerTextButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 1px solid ${defaultTheme.primaryColor};
`

export default DangerButton;

export  {DangerTextButton}