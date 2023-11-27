import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(224,224,224);
background: -moz-linear-gradient(51deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%);
background: -webkit-linear-gradient(51deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%);
background: linear-gradient(51deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e0e0e0",endColorstr="#ffffff",GradientType=1);
    font-family: Arial, sans-serif;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
    position: relative; /* Assurez-vous que le conteneur parent est en position relative */
  min-height: 100vh; /* Couvre toute la hauteur de la fenêtre */
}
  }
`;
export const HeaderStyle = styled.header`
  @media (orientation: portrait) and (max-width:767px)  {
    margin: 0;
    padding: 0;
    width: 100vw;
    background: black;
    overflow: hidden; /* Empêche le contenu de dépasser */

    img {
      max-width: 100%; /* Force l'image à s'adapter à la largeur de son conteneur */
      height: auto; /* Assurez-vous que la hauteur s'ajuste automatiquement */
      display: block; /* Élimine les espaces vides sous l'image */
    }
  }

  @media (orientation: landscape)  {
    display: none;
  }
  @media (min-width: 768px)  {
    display: none;
  }
`;


export const GlobalStylePrestation = createGlobalStyle`
body {
  background-color: #e0e0e0;
  font-family: Arial, sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  position: relative;
}
`;

