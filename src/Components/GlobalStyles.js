import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
 
    background-color: ${({theme})=>theme.background};
    color: ${({theme})=>theme.text};
    transition: all 0.50s linear;

}

a {
  color: ${({theme})=>theme.text}; ;
}

.fade{
  animation-name:test;
  animation-duration:0.5s;
}

@keyframes test{
  from {opacity:0;}
  to {opacity:1;}
}
`

