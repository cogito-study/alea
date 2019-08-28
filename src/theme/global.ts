import { createGlobalStyle } from 'styled-components';
import 'typeface-nunito-sans';

export const GlobalStyle = createGlobalStyle`
  body {
    @import 'https://cdn.rawgit.com/h-ibaldo/Raleway_Fixed_Numerals/master/css/rawline.css';
    margin: 0;
    padding: 0;
  }
`;
