import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const desktop = '@media(min-width: 1168px)';
const desktopResponsive = '@media(max-width: 1168px)';

export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
body{
  background:#f6f8fb;
  margin:0;
  padding:0;
  box-sizing: 'border-box';
  list-style-type: 'none';
  text-decoration: 'none';
  width: 100%;
  height: 100vh;
  text-rendering: optimizeLegibility;
  font-family:Lato;
}
`;
export const DivResponsive = styled.div`
    ${desktop} {
        display: none;
    }
`;
export const DivDashboard = styled.div`
    ${desktopResponsive} {
        display: none;
    }
`;
